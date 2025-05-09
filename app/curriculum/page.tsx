import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function Curriculum() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* Hero section with background image */}
        <div className="relative h-[400px]">
          <Image src="/images/pink.png" alt="Pears background" fill priority className="object-cover brightness-75" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-5xl font-bold mb-3">Healthcare Curriculum</h1>
            <p className="text-xl mb-8">Free to access!</p>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe1Wa9pIaf74kCyi93pWc-YnaOPMSb7YHGNtdhEur7faYCJJw/viewform" target="_blank">
              <button className="bg-black text-white px-6 py-3 rounded-sm hover:bg-gray-800">
                Join our listserv to get curriculum updates!
              </button>
            </Link>
          </div>
        </div>

        {/* Navbar overlaid on the hero image */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Reducing Stigma Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Improving
            Memory</h2>
            <p className="text-gray-700 mb-6">Learning how memory changes over time
            </p>
            <Link href="/memory.pdf" target="_blank">
              <button className="bg-black text-white px-4 py-2 rounded-sm hover:bg-gray-800">Learn More</button>
            </Link>
            
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/think.jpg"
              alt="People talking"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Common Medications Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="order-2 md:order-1">
            <Image
              src="/images/emotion.webp"
              alt="Medications"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">Emotions and Expression</h2>
            <p className="text-gray-700 mb-6">Why is expressing yourself important?</p>
            <Link href="/emotion.pdf" target="_blank">
              <button className="bg-black text-white px-4 py-2 rounded-sm hover:bg-gray-800">Learn More</button>
            </Link>
          </div>
        </div>

        {/* Mental Wellness Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12">Understanding
Mental Wellness &
Creating Goals</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Depression */}
            <div className="grid grid-cols-2 gap-6 items-start">
              <div>
                <Image
                  src="/images/sad.jpg"
                  alt="Depression illustration"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold mb-1">Depression</h3>
                <p className="text-sm text-gray-700 mb-1">Risk Factors: <br /> Medical conditions such as stroke or cancer <br />Personal or family history of depression<br />Stress, including caregiver stress<br />Sleep problems</p>
                <p className="text-sm text-gray-700">Signs & Symptoms: <br />Feeling sad, empty, or hopeless often or all the time
<br />Not wanting to do activities that used to be fun
<br />Weight gain or loss, or changes in appetite
<br />Trouble falling asleep or staying asleep</p>
              </div>
            </div>

            {/* Anxiety */}
            <div className="grid grid-cols-2 gap-6 items-start">
              <div>
                <h3 className="font-bold mb-1">Anxiety</h3>
                <p className="text-sm text-gray-700">Signs & Symptoms: <br />Avoiding activities they enjoy, such as socializing
<br />Insomnia
<br />Eating less
<br />Restlessness and trouble focusing
<br />Trembling or sweating
<br />Racing heart
<br />Muscle tension
<br />Stomach aches
<br />Headaches</p>
              </div>
              <div>
                <Image
                  src="/images/anxiety.jpg"
                  alt="Anxiety illustration"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Reflection */}
            <div className="grid grid-cols-2 gap-6 items-start md:col-span-2 max-w-md mx-auto">
            <Link href="/wellness.pdf" target="_blank">
              <button className="bg-black text-white px-4 py-2 rounded-sm hover:bg-gray-800">Learn More</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
