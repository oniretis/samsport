import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const NavItem = (props) => (
  <li>
    <Link href={props.href}>
      <a className="text-sm font-bold text-blue-900 px-2 py-1 hover:bg-gray-900 rounded-xl hover:text-white transition-colors duration-300 dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900">
        {props.text}
      </a>
    </Link>
  </li>
);

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <motion.div
      className="container mx-auto"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <nav className="flex justify-between p-4">
        <div>
          <Link href="/">
            <a>
              <span className="font-play font-bold">S.</span>
            </a>
          </Link>
        </div>
        <div>
          <ul className="flex space-x-2">
            <NavItem href="/experience" text="Experience" />
            <NavItem href="/projects" text="Projects" />
            <NavItem href="/contact" text="Contact" />
          </ul>
        </div>
        <div>{renderThemeChanger()}</div>
      </nav>
    </motion.div>
  );
}

export default Navbar;
