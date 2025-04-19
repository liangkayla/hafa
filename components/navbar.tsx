import Link from "next/link"

export default function Navbar() {
  return (
    <header className="py-3 px-6 flex justify-between items-center">
      <div className="font-bold text-lg">
        <Link href="/">HAFA</Link>
      </div>
      <nav className="flex items-center space-x-6">
        <Link href="/" className="text-sm hover:underline">
          Home
        </Link>
        <Link href="/resources" className="text-sm hover:underline">
          Resources
        </Link>
        <Link href="/curriculum" className="text-sm hover:underline">
          Curriculum
        </Link>
        <Link
          href="/contact"
          className="bg-white text-black px-3 py-1 text-sm rounded-sm border border-gray-300 hover:bg-gray-100"
        >
          Contact Us!
        </Link>
      </nav>
    </header>
  )
}
