export interface HealthcareLocation {
  name: string
  type: "Hospital" | "Pharmacy"
  address: string
  lat: number
  lng: number
  description: string
  services: string[]
}

export const healthcareLocations: HealthcareLocation[] = [
  {
    name: "Duke University Hospital",
    type: "Hospital",
    address: "2301 Erwin Rd, Durham, NC 27710",
    lat: 36.0077,
    lng: -78.9384,
    description: "A renowned academic medical center offering comprehensive healthcare services.",
    services: [
      "Geriatric Medicine Specialists",
      "Memory Disorders Clinic",
      "Fall Prevention Program",
      "Chronic Disease Management",
      "Physical Rehabilitation Services",
      "Palliative Care",
    ],
  },
  {
    name: "Duke Regional Hospital",
    type: "Hospital",
    address: "3643 N Roxboro St, Durham, NC 27704",
    lat: 36.0367,
    lng: -78.9006,
    description: "Community hospital providing a wide range of healthcare services.",
    services: [
      "Senior Care Clinic",
      "Arthritis Treatment",
      "Cardiac Care for Seniors",
      "Diabetes Management",
      "Wound Care Center",
    ],
  },
  {
    name: "Durham VA Medical Center",
    type: "Hospital",
    address: "508 Fulton St, Durham, NC 27705",
    lat: 36.0095,
    lng: -78.9346,
    description: "Providing healthcare services to veterans in the Durham area.",
    services: [
      "Geriatric Primary Care",
      "Home-Based Primary Care",
      "Alzheimer's Disease and Related Dementias Care",
      "Caregiver Support Program",
      "Hearing and Vision Services",
    ],
  },
  {
    name: "North Carolina Specialty Hospital",
    type: "Hospital",
    address: "3916 Ben Franklin Blvd, Durham, NC 27704",
    lat: 36.0322,
    lng: -78.8702,
    description: "Specialized surgical care and treatment for various conditions.",
    services: [
      "Orthopedic Surgery",
      "Joint Replacement",
      "Pain Management",
      "Ophthalmology Services",
      "Outpatient Rehabilitation",
    ],
  },
  {
    name: "CVS Pharmacy",
    type: "Pharmacy",
    address: "5311 Roxboro Rd, Durham, NC 27712",
    lat: 36.0791,
    lng: -78.908,
    description: "Full-service pharmacy with prescription services and healthcare products.",
    services: [
      "Prescription Delivery",
      "Medication Therapy Management",
      "Immunizations",
      "Medicare Part D Consultations",
      "Automatic Refill Program",
      "Durable Medical Equipment",
    ],
  },
  {
    name: "Walgreens",
    type: "Pharmacy",
    address: "3798 Guess Rd, Durham, NC 27705",
    lat: 36.0372,
    lng: -78.9187,
    description: "Pharmacy offering prescription services, health products, and wellness consultations.",
    services: [
      "24-Hour Prescription Services",
      "Senior Discount Day",
      "Medication Adherence Programs",
      "Specialized Medication Packaging",
      "Blood Pressure Monitoring",
      "Diabetes Supplies",
    ],
  },
  {
    name: "Bull City Pharmacy",
    type: "Pharmacy",
    address: "2712 Hillsborough Rd, Durham, NC 27705",
    lat: 36.0119,
    lng: -78.9297,
    description: "Independent pharmacy providing personalized care and medication services.",
    services: [
      "Compounding Services",
      "Medication Synchronization",
      "Home Delivery",
      "Medication Reviews",
      "Medication Disposal",
      "Specialty Medications for Seniors",
    ],
  },
  {
    name: "Durham Pharmacy",
    type: "Pharmacy",
    address: "1107 Holloway St, Durham, NC 27701",
    lat: 35.9936,
    lng: -78.8838,
    description: "Community pharmacy offering personalized service and healthcare advice.",
    services: [
      "Blister Pack Medication Packaging",
      "Medication Counseling",
      "Prescription Transfer Service",
      "Flu and Shingles Vaccines",
      "Mobility Aids",
      "Compression Stockings",
    ],
  },
]
