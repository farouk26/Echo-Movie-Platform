import { IoSearchCircleOutline } from "react-icons/io5"
import Image from "next/image"
import Link from "next/link"

export default function Nav() {
  return (
    <div className="navbar bg-dark-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-dark-50 rounded-t-none">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}
