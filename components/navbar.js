import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function Navbar() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/songs">
                <a>Sånger</a>
              </Link>
            </li>

            <li>
              <select
                data-choose-theme
                className="select select-accent w-full max-w-xs"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="cyberpunk">Cyberpunk</option>
              </select>
            </li>
          </ul>
        </div>
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">Ingarö Moppers</a>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/songs">
              <a>Sånger</a>
            </Link>
          </li>

          <li>
            <select data-choose-theme className="">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="cyberpunk">Cyberpunk</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}
