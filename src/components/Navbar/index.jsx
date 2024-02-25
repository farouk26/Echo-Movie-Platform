import { IoSearchCircleOutline } from "react-icons/io5"
import Image from "next/image"
import Link from "next/link"

export default function Nav() {
  return (
    <div className="navbar bg-dark-100 px-20">
      <div className="navbar-start">
        <figure className="min-w-fit h-8 my-3">
          <Image
            src="/images/logo.png"
            alt="logo"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
      <div className="navbar-center w-1/3 flex justify-center items-center">
        <ul className="flex gap-2 w-full justify-evenly items-center">
          <li>
            <Link href="/">Browse</Link>
          </li>
          <li>
            <Link href="/">Movies</Link>
          </li>
          <li>
            <Link href="/">Tv Shows</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label className="input input-bordered flex items-center gap-2">
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
      </div>
    </div>
  )
}
