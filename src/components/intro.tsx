"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="flex space-x-4">
          <div className="relative h-24 w-24">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src="/ropon.jpeg"
                alt="Rubén Profile Pic"
                layout="fill"
                quality="80"
                priority={true}
                className="rounded-full shadow-2xl"
              />
            </motion.div>
            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hola, soy Rubén Manzano.</span> Soy un{" "}
        <span className="font-bold">desarrollador full-stack </span> con{" "}
        <span className="font-bold"> 2 años de experiencia </span>. Me gustan
        las actividades que tengan que ver con un ordenador, entre ellas el{" "}
        <span className="italic">desarrollo de aplicaciones</span>. Mi principal
        foco es <span className="underline">React (Next.js)</span>.
      </motion.h1>
    </section>
  );
}
