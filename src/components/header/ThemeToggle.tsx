"use client";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import styles from "./header.module.css";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid SSR issues by waiting for the component to mount

  return (
    <div
      className={styles.themeToggle}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? (
        <MdLightMode size={32} className={styles.textBackgroundLight} />
      ) : (
        <MdDarkMode size={32} className={styles.textBackgroundDark} />
      )}
    </div>
  );
};

export default ThemeToggle;
