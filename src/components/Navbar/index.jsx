import { IoSearchCircleOutline } from "react-icons/io5"
import Image from "next/image"
import Link from "next/link"
import { Button, Input } from "@material-tailwind/react"

export default function Nav() {
  return (
    <section className="w-full">
      <nav className="bg-dark-200 w-full h-16 flex justify-between items-center px-5 lg:px-20">
        <div className="flex gap-10 items-center h-full w-full">
          <figure className="w-12">
            <Image src="/images/logo.png" alt="logo" height={200} width={200} />
          </figure>
          <div className="gap-8 hidden lg:flex lg:justify-between uppercase lg:items-center h-full">
            <Link href="/">Browse</Link>
            <Link href="/">Movies</Link>
            <Link href="/">Tv Shows</Link>
          </div>
        </div>
        <div className="relative hidden items-center w-full gap-2 md:w-max lg:block ">
          <Input
            type="search"
            color="white"
            label="Search ..."
            containerProps={{
              className: "min-w-[288px] bg-dark-50",
            }}
          />
          <Button
            size="sm"
            className="!absolute right-1 top-[2px] bg-transparent shadow-none text-gray-400"
          >
            <IoSearchCircleOutline className="w-5 h-5" />
          </Button>
        </div>
      </nav>
    </section>
  )
}
