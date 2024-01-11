import { Navbar, IconButton, iconButton, Input } from "@material-tailwind/react"
import { IoSearchCircleOutline } from "react-icons/io5"
import Image from "next/image"
import Link from "next/link"

export default function Nav() {
  return (
    <section className="w-full">
      <Navbar
        color="blue-gray"
        className=" bg-dark-100 py-3 min-w-full px-20 rounded-none"
      >
        <div className="flex items-center justify-between w-full text-white">
          <div className="flex gap-5 justify-start w-full items-center">
            <figure className="h-full w-[5%]">
              <Image
                src="/images/logo.png"
                alt="logo"
                height={500}
                width={500}
                priority
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="flex justify-evenly items-center gap-4 h-full">
              <Link href="/">Browse</Link>
              <Link href="/movies">Movies</Link>
              <Link href="/series">Tv Shows</Link>
            </div>
          </div>

          <div className="relative flex w-full gap-2 md:w-max bg-dark-50">
            <Input
              type="search"
              color="white"
              label="Type here..."
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <IconButton
              size="sm"
              className="!absolute right-1 top-1 rounded bg-inherit"
            >
              <IoSearchCircleOutline className="text-white w-6 h-6" />
            </IconButton>
          </div>
        </div>
      </Navbar>
    </section>
  )
}
