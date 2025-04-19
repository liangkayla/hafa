import Navbar from "@/components/navbar"
import dynamic from "next/dynamic"
import HealthcareResourcesList from "@/components/healthcare-resources-list"
import { healthcareLocations } from "@/lib/healthcare-data"

// Import the map component dynamically with no SSR
const MapComponent = dynamic(() => import("@/components/map-component"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] flex items-center justify-center bg-gray-100">
      <p>Loading map...</p>
    </div>
  ),
})

export default function Resources() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Resources</h1>
          <p className="text-lg mb-8">Use the tool below to find healthcare services near you!</p>

          <div className="mb-8 border rounded-md overflow-hidden h-[500px] relative">
            <MapComponent locations={healthcareLocations} />
          </div>

          <div className="mb-12">
            <p className="mb-4">
              Used to help older adults and seniors find personalized healthcare services in their area based on their
              unique needs.
            </p>

            <p className="mb-4">
              Healthy Aging for America (HAFA) recognizes that while there is significant focus on the health of senior
              citizens (age 65+), it is equally important to address the health of older adults transitioning into
              seniorhood. To address this gap, HAFA adopts a dual approach that offers both direct educational support
              and accessible technological solutions to enhance the healthcare experiences of older adults.
            </p>
          </div>

          <HealthcareResourcesList locations={healthcareLocations} />
        </div>
      </div>
    </main>
  )
}
