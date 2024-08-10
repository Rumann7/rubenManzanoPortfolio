import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="flex space-x-4">
          <div className="relative h-24 w-24">
            <Image
              src="/ropon.jpeg"
              alt="Rubén Profile Pic"
              layout="fill"
              quality="80"
              priority={true}
              className="rounded-full shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full shadow-2xl"></div>
          </div>
          <div className="relative h-24 w-24">
            <Image
              src="/favicon.jpeg"
              alt="icon"
              layout="fill"
              quality="80"
              priority={true}
              className="rounded-full shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full shadow-2xl"></div>
          </div>
        </div>
        <span className="text-xl">👋 Hola muy buenas</span>
      </div>
    </section>
  );
}
