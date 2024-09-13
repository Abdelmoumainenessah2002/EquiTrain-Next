"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { GiSeahorse } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes"; // Import the useTheme hook

const NavBar = () => {
  const t = useTranslations("");
  const { theme } = useTheme(); // Use theme from next-themes
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
        className={`${styles.navLinksWrapper} ${
          theme === "light"
            ? "max-lg:bg-background-light"
            : "max-lg:bg-background-dark"
        }`}
        style={{
          clipPath: toogle ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "",
        }}
      >
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <Link onClick={() => setToggle(false)} href="/">
              {t("header.nav.posts")}
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link onClick={() => setToggle(false)} href="/">
              {t("header.nav.friends")}
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link onClick={() => setToggle(false)} href="/">
              {t("header.nav.notifications")}
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link onClick={() => setToggle(false)} href="/">
              {t("header.nav.admin")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
