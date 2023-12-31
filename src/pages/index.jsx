import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="min-h-screen w-full flex justify-center items-center">
      <div className="bg-zinc-700 rounded-3xl shadow-sm w-1/2 h-32 flex justify-center items-center bg-gray-900">
        <p className="text-lg">Work in Progress</p>
      </div>
    </main>
  )
}
