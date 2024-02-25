import { HiMenuAlt3 } from "react-icons/hi"
import Image from "next/image"
import Link from "next/link"

export default function Nav() {
  return (
    <div className="navbar bg-dark-100 lg:px-20 px-6">
      <div className="navbar-start flex gap-6 items-center">
        <Link href="/">
          <figure className="min-w-fit h-8 my-3">
            <Image
              src="/images/logo.png"
              alt="logo"
              height={500}
              width={500}
              className="w-full h-full object-cover"
            />
          </figure>
        </Link>
        <ul className="lg:flex gap-2 justify-evenly items-center uppercase text-md font-light text-gray-400 hidden">
          <li>
            <Link className="btn btn-sm btn-ghost" href="/">
              Browse
            </Link>
          </li>
          <li>
            <Link className="btn btn-sm btn-ghost" href="/">
              Movies
            </Link>
          </li>
          <li>
            <Link className="btn btn-sm btn-ghost" href="/">
              Tv Shows
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label className="input input-bordered input-sm lg:flex items-center gap-2 hidden">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <HiMenuAlt3 className="lg:hidden block h-6 w-6 text-gray-200" />
      </div>
    </div>
  )
}
