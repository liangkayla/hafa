"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import type { HealthcareLocation } from "@/lib/healthcare-data"

// Import the map component dynamically with no SSR
const MapComponent = dynamic(() => import("@/components/map-component"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] flex items-center justify-center bg-gray-100">
      <p>Loading map...</p>
    </div>
  ),
})

interface MapContainerProps {
  locations: HealthcareLocation[]
}

export default function MapContainer({ locations }: MapContainerProps) {
  const [isMounted, setIsMounted] = useState(false)

  // Ensure we only render the map on the client side
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="h-[500px] flex items-center justify-center bg-gray-100">
        <p>Loading map...</p>
      </div>
    )
  }

  return <MapComponent locations={locations} />
}
