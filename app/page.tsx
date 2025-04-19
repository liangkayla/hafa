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

          <Link href="/join">
            <button className="bg-black text-white px-6 py-3 rounded-sm hover:bg-gray-800 mb-12">
              Join our listserv!!!!!!!!
            </button>
          </Link>

          <div className="flex justify-center mb-16">
            <Image
              src="/images/hafa-logo.png"
              alt="HAFA Logo"
              width={500}
              height={400}
              priority
              className="w-full max-w-md"
            />
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Section heading</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Subheading</h3>
                <p className="text-gray-700 mb-6">Body text for whatever you'd like to expand on the main point.</p>

                <h3 className="font-semibold mb-2">Subheading</h3>
                <p className="text-gray-700 mb-6">
                  Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes.
                </p>

                <h3 className="font-semibold mb-2">Subheading</h3>
                <p className="text-gray-700 mb-6">
                  Body text for whatever you'd like to add more to the main point. It provides details, explanations,
                  and context.
                </p>

                <div className="flex gap-4 mt-4">
                  <button className="bg-black text-white px-4 py-2 rounded-sm hover:bg-gray-800">Button</button>
                  <button className="bg-white border border-black text-black px-4 py-2 rounded-sm hover:bg-gray-100">
                    Secondary button
                  </button>
                </div>
              </div>

              <div>
                <Image
                  src="/images/fruits.jpg"
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
