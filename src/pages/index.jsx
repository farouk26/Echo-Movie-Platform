import Faq from "@/components/FAQs"
import Link from "next/link"

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col gap-4 my-8 justify-center">
      <div className="flex w-full flex-col gap-6 min-h-fit lg:px-0 px-8">
        <div className="flex flex-col gap-8 w-full justify-center items-center">
          <h1 className="text-4xl lg:text-6xl font-bold w-full lg:w-[50%] text-center">
            Watch Movies Online in High Definition for Free!
          </h1>
          <p className="lg:text-lg text-md text-gray-300 font-light lg:w-[60%] text-center">
            Avatar: The last Airbender, The Walking Dead: The Ones Who Live,
            Halo, The Rookie, Red Right Hand, Tracker, Mean Girls, Young Sheldon
          </p>
        </div>
        <div className="flex flex-col w-full gap-4 justify-center items-center py-4">
          <Link
            href={"/"}
            className="btn btn-info btn-md rounded-3xl w-[60%] lg:w-[20%] font-bold text-lg border-opacity-0"
          >
            Open Home Page
          </Link>
          <p className="font-light text-sm text-center lg:text-md text-gray-500">
            The Ultimate Destination for Free Movies and TV Shows: Watch
            Anytime, Anywhere.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4 lg:px-0 px-6">
        <Faq
          title={"What is Echo?"}
          description={
            "Echo the cutting-edge free movie streaming website. Enjoy thousands of movies and TV shows in HD, all for free. Echo breaks stereotypes by providing an enhanced and refined movie streaming experience. It improves upon the strengths of traditional sites while leaving behind their flaws and inconveniences. With a user-friendly interface, an extensive movie library, and seamless streaming capabilities, Echo leads the way in the evolving landscape of free movie sites."
          }
        />
        <Faq
          title={"What you can watch on Echo?"}
          description={
            "Discover the incredible variety of movies available on Echo. With a vast and diverse range of films, there's something for every taste and preference. Explore the extensive content library, offering an impressive selection of titles spanning various genres. From action-packed thrillers and heartwarming romances to captivating dramas and hilarious comedies, Echo has it all. Whether you crave the latest blockbusters or timeless classics, our high-quality movie collection will keep you entertained for hours on end."
          }
        />
        <Faq
          title={"Is it Legal to Watch Movies Online on FlixWave?"}
          description={
            "Watching movies online on platforms like Echo is generally considered legal, as per copyright attorneys. Streaming movies usually does not violate copyright laws. However, it is crucial to understand that sharing or downloading copyrighted content without proper authorization is illegal and infringes upon intellectual property rights. To maintain anonymity and security while engaging in online activities, it is highly recommended to use a Virtual Private Network (VPN)."
          }
        />
        <Faq
          title={"What Are The Features Of Echo?"}
          description={
            "FlixWave offers a freemium movie streaming experience with premium features, allowing you to watch movies online for free without registration."
          }
        />
      </div>
    </section>
  )
}
