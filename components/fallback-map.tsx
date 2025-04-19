import Image from "next/image"
import type { HealthcareLocation } from "@/lib/healthcare-data"

interface FallbackMapProps {
  locations: HealthcareLocation[]
}

export default function FallbackMap({ locations }: FallbackMapProps) {
  return (
    <div className="h-full w-full bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold">Map of Healthcare Resources</h3>
        <p className="text-sm text-gray-600">
          Interactive map showing {locations.length} healthcare facilities in Durham, NC
        </p>
      </div>
      <div className="relative w-full max-w-lg h-64">
        <Image src="/images/map.jpg" alt="Map of Durham, NC" fill className="object-cover rounded-md" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="bg-white/80 px-4 py-2 rounded-md">Interactive map unavailable in preview</p>
        </div>
      </div>
    </div>
  )
}
