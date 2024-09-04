import Link from 'next/link'
import React from 'react'
import { GiSeahorse } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";


function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header-left">
            <h2 className="logo">
              <Link href="/">
                Equi
                <GiSeahorse />
                rain
              </Link>
            </h2>
            <AiOutlineMenu />
          </div>

          <div className="navbar">
            <nav>
              <ul className="navbar-links">
                <li className="navbar-link">Posts</li>
                <li className="navbar-link"></li>
                <li className="navbar-link"></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header
