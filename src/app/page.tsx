import Header from "@/components/header";
import Intro from "@/components/intro";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Intro />
    </main>
  );
}
