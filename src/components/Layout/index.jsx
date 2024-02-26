import Footer from "../Footer"
import Nav from "../Navbar"

function Layout({ children }) {
  return (
    <main className="font-poppins w-full bg-dark-200">
      <Nav />
      <div className="w-full min-h-screen">{children}</div>
      <Footer />
    </main>
  )
}

export default Layout
