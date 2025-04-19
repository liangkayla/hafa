import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Healthy Aging for America</h1>
          <p className="text-lg mb-6">Duke University</p>

          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe1Wa9pIaf74kCyi93pWc-YnaOPMSb7YHGNtdhEur7faYCJJw/viewform" target="_blank">
            <button className="bg-black text-white px-6 py-3 rounded-sm hover:bg-gray-800 mb-12">
              Join our listserv!!!!!!!!
            </button>
          </Link>

          <div className="flex justify-center mb-16">
            <Image
              src="/images/hafa-logo-2.png"
              alt="HAFA Logo"
              width={500}
              height={400}
              priority
              className="w-full max-w-md"
            />
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">INTERESTED IN HEALTHCARE,
EDUCATION, VOLUNTEERING, OR
DIGITAL DEVELOPMENT?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Volunteer as a health
education facilitator at
community centers and
living facilities!</h3>

                <h3 className="font-semibold mb-2">Develop a digital tool to
connect underserved
adults and seniors to
healthcare resources!</h3>
              

              

                <div className="flex gap-4 mt-4">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe1Wa9pIaf74kCyi93pWc-YnaOPMSb7YHGNtdhEur7faYCJJw/viewform?usp=header" target="_blank">
  <button className="bg-black text-white px-4 py-2 rounded-sm hover:bg-gray-800">
    Join our listserv!
  </button>
</Link>

<Link href="https://docs.google.com/forms/d/e/1FAIpQLScE1B53RqJ3Kqxlwz2hNaGuHiQIRovBuZuc3MEsIT8N3AXMOA/viewform?usp=header" target="_blank">
  <button className="bg-white border border-black text-black px-4 py-2 rounded-sm hover:bg-gray-100">
    Committee Sign Up Form
  </button>
</Link>
                </div>
              </div>

              <div>
                <Image
                  src="/images/ig.png"
                  alt="Healthy fruits"
                  width={500}
                  height={500}
                  className="w-full rounded-md"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
