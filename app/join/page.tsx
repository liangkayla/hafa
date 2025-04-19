import Navbar from "@/components/navbar"

export default function Join() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Join Our Listserv</h1>

          <form className="grid gap-6 max-w-md">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input type="text" id="name" className="w-full p-2 border rounded-md" placeholder="Your name" />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input type="email" id="email" className="w-full p-2 border rounded-md" placeholder="Your email" />
            </div>

            <button type="submit" className="bg-black text-white px-6 py-3 rounded-sm hover:bg-gray-800">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
