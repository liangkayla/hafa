"use client"

import { useEffect, useRef, useState } from "react"
import type { HealthcareLocation } from "@/lib/healthcare-data"

// Define types for Leaflet since we're loading it dynamically
declare global {
  interface Window {
    L: any
  }
}

interface MapComponentProps {
  locations: HealthcareLocation[]
}

export default function MapComponent({ locations }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Dynamic import of Leaflet
    const loadMap = async () => {
      try {
        // Import Leaflet dynamically
        const L = (await import("leaflet")).default

        // Import Leaflet CSS
        const linkElement = document.createElement("link")
        linkElement.rel = "stylesheet"
        linkElement.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        document.head.appendChild(linkElement)

        // Wait a moment for CSS to load
        await new Promise((resolve) => setTimeout(resolve, 100))

        // Fix Leaflet icon issues
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        })

        // Initialize map if it doesn't exist and ref is available
        if (mapRef.current) {
          // Durham, NC coordinates
          const durhamCoordinates: [number, number] = [35.994, -78.8986]

          const map = L.map(mapRef.current).setView(durhamCoordinates, 13)

          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map)

          // Add markers for each location
          locations.forEach((location) => {
            const marker = L.marker([location.lat, location.lng]).addTo(map)

            // Create popup content
            const popupContent = `
              <div>
                <h3 class="font-bold">${location.name}</h3>
                <p>${location.address}</p>
                <p>${location.type}</p>
              </div>
            `

            marker.bindPopup(popupContent)
          })

          setMapLoaded(true)

          // Cleanup function
          return () => {
            map.remove()
          }
        }
      } catch (error) {
        console.error("Error loading map:", error)
      }
    }

    loadMap()
  }, [locations])

  return (
    <>
      <div ref={mapRef} className="h-full w-full" />
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p>Loading map...</p>
        </div>
      )}
    </>
  )
}
