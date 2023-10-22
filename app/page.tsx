import React from "react";
import { RadiusPointer } from "../components/RadiusPointer/RadiusPointer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <RadiusPointer />
    </main>
  );
}
