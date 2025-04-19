import type { HealthcareLocation } from "@/lib/healthcare-data"

interface HealthcareResourcesListProps {
  locations: HealthcareLocation[]
}

export default function HealthcareResourcesList({ locations }: HealthcareResourcesListProps) {
  // Separate locations by type
  const hospitals = locations.filter((location) => location.type === "Hospital")
  const pharmacies = locations.filter((location) => location.type === "Pharmacy")

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Healthcare Resources in Durham</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Hospitals Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Hospitals</h3>
          <div className="space-y-6">
            {hospitals.map((hospital, index) => (
              <div key={index} className="border rounded-md p-4 bg-gray-50">
                <h4 className="font-bold">{hospital.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{hospital.address}</p>
                <p className="text-sm mb-3">{hospital.description}</p>

                <h5 className="font-semibold text-sm mb-1">Elderly Care Services:</h5>
                <ul className="list-disc pl-5 text-sm">
                  {hospital.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Pharmacies Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Pharmacies</h3>
          <div className="space-y-6">
            {pharmacies.map((pharmacy, index) => (
              <div key={index} className="border rounded-md p-4 bg-gray-50">
                <h4 className="font-bold">{pharmacy.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{pharmacy.address}</p>
                <p className="text-sm mb-3">{pharmacy.description}</p>

                <h5 className="font-semibold text-sm mb-1">Services:</h5>
                <ul className="list-disc pl-5 text-sm">
                  {pharmacy.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
