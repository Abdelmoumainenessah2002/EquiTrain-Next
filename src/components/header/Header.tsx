"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import NavBar from "./NavBar";
import styles from "./header.module.css";

function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <header className={styles.header}>
      <NavBar />
      <ThemeToggle />
      <div className={styles.right}>
        <Link className={styles.btn} href="/login">
          Login
        </Link>
        <Link className={styles.btn} href="/register">
          Register
        </Link>
      </div>
    </header>
  );
}

export default Header;
