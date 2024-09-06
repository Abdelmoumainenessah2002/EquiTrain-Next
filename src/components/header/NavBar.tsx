'use client'
import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { GiSeahorse } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";


const NavBar = () => {
  
  const [toogle, setToggle] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        {toogle ? (
          <IoMdClose onClick={() => setToggle((prev) => !prev)} />
        ) : (
          <AiOutlineMenu onClick={() => setToggle((prev) => !prev)} />
        )}
      </div>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>
          Equi
          <GiSeahorse className={styles.logoIcon} />
          rain
        </Link>
      </div>
      <div
        className={styles.navLinksWrapper}
        style={{
          clipPath: (toogle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)") || "",
        }}
      >
        <ul className={styles.navLinks}>
          <Link
            onClick={() => setToggle(false)}
            className={styles.navLink}
            href="/"
          >
            Posts
          </Link>
          <Link
            onClick={() => setToggle(false)}
            className={styles.navLink}
            href="/"
          >
            Friends
          </Link>
          <Link
            onClick={() => setToggle(false)}
            className={styles.navLink}
            href="/"
          >
            Notifications
          </Link>
          <Link
            onClick={() => setToggle(false)}
            className={styles.navLink}
            href="/"
          >
            Admin Dashbord
          </Link>
        </ul>
      </div>
    </nav>
  );
};


export default NavBar;













// import Link from "next/link";

// const HeaderRight = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
//   console.log(isMenuOpen);

//   return (
//     <nav className={""}>
//       <ul className="">
//         <li className="">Posts</li>
//         <li className="">Friends</li>
//         <li className="">Search</li>
//         <li className="">Notifications</li>
//         <button className="">Login</button>
//         <button className="">Signup</button>
//       </ul>
//     </nav>
//   );
// };

// export default HeaderRight;
