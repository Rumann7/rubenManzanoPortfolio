"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { links } from "@/lib/data";

export default function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[3.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-full flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onMouseEnter={() => setHoveredLink(link.hash)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link
                className="flex items-center justify-center px-3 py-3 hover:bg-green-300 dark:hover:bg-green-900 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                href={link.hash}
                aria-label={link.name}
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  className="h-5 w-5 text-[#04FB94]"
                />
              </Link>
              {hoveredLink === link.hash && (
                <motion.span
                  className="absolute top-full mt-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-2 py-1 rounded"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {link.name}
                </motion.span>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
