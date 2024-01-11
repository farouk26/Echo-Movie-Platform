import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react"
import Image from "next/image"

export default function Nav() {
  return (
    <section className="w-full">
      <Navbar color="blue-gray" className=" bg-dark-100 px-4 py-3 min-w-full">
        <div className="flex flex-wrap items-center justify-between gap-y-4 w-full text-white">
          <figure className="h-full w-[3%]">
            <Image
              src="/images/logo.png"
              alt="logo"
              height={500}
              width={500}
              priority
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Type here..."
              className="bg-dark-50"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
        </div>
      </Navbar>
    </section>
  )
}
