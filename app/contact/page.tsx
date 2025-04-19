import Image from "next/image"
import Navbar from "@/components/navbar"

interface TeamMember {
  name: string
  role: string
  email: string
  image: string
}

interface Partner {
  name: string
  description: string
  logo: string
  website: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Yim",
    role: "President",
    email: "sarah.yim@duke.edu",
    image: "/images/sarah.jpeg",
  },
  {
    name: "Monica Shao",
    role: "Vice President",
    email: "monica.shao@duke.edu",
    image: "/images/monica.png",
  },
  {
    name: "Katherine Zhang",
    role: "Treasurer",
    email: "kat.zhang@duke.edu",
    image: "/images/kat.jpeg",
  },
  {
    name: "Kayla Liang",
    role: "Digital Health Committee Chair",
    email: "kayla.liang@duke.edu",
    image: "/images/kayla.jpeg",
  },
]

const partners: Partner[] = [
  {
    name: "Durham Center for Senior Life",
    description: "Volunteering partner",
    logo: "/images/dcsl.png",
    website: "https://dcslnc.org/",
  },
]

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Instagram</h2>
            <p className="text-lg mb-2">
              <a className="text-blue-600 hover:underline">
                @dukehafa
              </a>
            </p>
            <p className="text-gray-600">
              For general inquiries, partnership opportunities, or to learn more about our programs, please reach out to
              sarah.yim@duke.edu.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="border rounded-md overflow-hidden bg-gray-50">
                  <div className="h-48 relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                    <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline text-sm">
                      {member.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Our Partners</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="border rounded-md overflow-hidden bg-gray-50">
                  <div className="h-40 relative">
                    <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{partner.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
