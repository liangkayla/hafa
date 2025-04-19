import Navbar from "@/components/navbar"
import Link from "next/link"

export default function StigmaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/curriculum" className="text-gray-600 hover:underline mb-6 inline-block">
            ← Back to Curriculum
          </Link>

          <h1 className="text-4xl font-bold mb-6">Reducing Stigma</h1>

          <div className="prose max-w-none">
            <p>
              Stigma surrounding aging and age-related health conditions can significantly impact the quality of life
              and healthcare access for older adults. At HAFA, we're committed to reducing this stigma through education
              and awareness.
            </p>

            <h2>Common Misconceptions</h2>
            <ul>
              <li>Aging always leads to cognitive decline</li>
              <li>Older adults cannot learn new skills</li>
              <li>Depression is a normal part of aging</li>
              <li>Physical limitations are inevitable and untreatable</li>
            </ul>

            <h2>Our Approach</h2>
            <p>
              Through community education, media campaigns, and intergenerational programs, we work to challenge these
              misconceptions and promote a more accurate and positive view of aging.
            </p>

            <p>
              Our curriculum materials are designed to be accessible and engaging, providing factual information about
              aging while highlighting the continued contributions, capabilities, and value of older adults in our
              communities.
            </p>

            <h2>Resources</h2>
            <p>
              This page will contain downloadable resources, workshop materials, and guides for addressing stigma
              related to aging. Check back soon for updates!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
