import Footer from "@/components/Footer"
import Nav from "@/components/Navbar"

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Nav />
      <div className="bg-white min-h-fit w-full text-black text-4xl text-center p-4">
        Page Test Text
      </div>
      <Footer />
    </main>
  )
}
