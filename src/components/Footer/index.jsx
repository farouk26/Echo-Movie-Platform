import Image from "next/image"
import { BsTelegram } from "react-icons/bs"
import { RiFacebookCircleFill, RiTwitterXFill } from "react-icons/ri"

import React from "react"

function Footer() {
  return (
    <footer className="footer footer-center py-10 bg-dark-100 text-primary-content border border-b border-blue-300 border-opacity-10">
      <aside>
        <figure className="h-10 mb-2">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </figure>
        <p className="text-gray-200">
          Echo Movie Platform Co. <br />
          Providing Streaming Services since 2024.
        </p>
        <p className="text-gray-200">Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="flex items-center gap-4 text-gray-200">
          <RiFacebookCircleFill className="h-7 w-7" />
          <BsTelegram className="h-6 w-6" />
          <RiTwitterXFill className="h-6 w-6" />
        </div>
      </nav>
    </footer>
  )
}

export default Footer
