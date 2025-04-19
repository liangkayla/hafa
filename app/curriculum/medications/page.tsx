import Navbar from "@/components/navbar"
import Link from "next/link"

export default function MedicationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/curriculum" className="text-gray-600 hover:underline mb-6 inline-block">
            ← Back to Curriculum
          </Link>

          <h1 className="text-4xl font-bold mb-6">Common Medications</h1>

          <div className="prose max-w-none">
            <p>
              Understanding medications is crucial for older adults to maintain their health and prevent complications.
              This section provides information about common medications, potential side effects, and strategies for
              medication management.
            </p>

            <h2>Medication Management</h2>
            <p>
              As we age, managing multiple medications becomes increasingly important. Polypharmacy (taking multiple
              medications) is common among older adults and can lead to adverse drug events if not properly managed.
            </p>

            <h2>Tips for Safe Medication Use</h2>
            <ul>
              <li>Keep an updated list of all medications, including over-the-counter drugs and supplements</li>
              <li>Use pill organizers to help remember when to take medications</li>
              <li>Ask your healthcare provider about potential side effects and drug interactions</li>
              <li>Never stop taking a prescribed medication without consulting your doctor</li>
              <li>Store medications properly according to instructions</li>
              <li>Dispose of expired medications safely</li>
            </ul>

            <h2>Common Medication Classes</h2>
            <p>
              This section will provide information about medication classes commonly prescribed to older adults,
              including:
            </p>
            <ul>
              <li>Antihypertensives (for high blood pressure)</li>
              <li>Statins (for cholesterol management)</li>
              <li>Anticoagulants (blood thinners)</li>
              <li>Pain medications</li>
              <li>Sleep aids</li>
              <li>Medications for diabetes management</li>
            </ul>

            <p>
              Check back soon for detailed information about each medication class, including common side effects and
              important considerations for older adults.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
