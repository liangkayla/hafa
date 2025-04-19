import Navbar from "@/components/navbar"
import MapContainer from "@/components/map-container"
import HealthcareResourcesList from "@/components/healthcare-resources-list"
import { healthcareLocations } from "@/lib/healthcare-data"

export default function Resources() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Resources</h1>
          <p className="text-lg mb-8">Use the tool below to find healthcare services near you!</p>

          <div className="mb-8 border rounded-md overflow-hidden h-[500px] relative">
            <MapContainer locations={healthcareLocations} />
          </div>

          <div className="mb-12">
            <p className="mb-4">
              Used to help older adults and seniors find personalized healthcare services in their area based on their
              unique needs.
            </p>

            
          </div>

          <HealthcareResourcesList locations={healthcareLocations} />
        </div>
      </div>
    </main>
  )
}
