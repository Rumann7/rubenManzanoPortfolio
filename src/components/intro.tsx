"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
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
            <motion.span className="absolute bottom-0 right-0 text-4xl">
              👋
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}
