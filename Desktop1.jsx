"use client";
import * as React from "react";
import Header from "./Header";
import MissionSection from "./MissionSection";
import PurposeSection from "./PurposeSection";
import Footer from "./Footer";

function Desktop1() {
  return (
    <main className="flex overflow-hidden flex-col pt-2.5 font-bold text-black bg-white">
      <Header />

      <section
        className="flex mt-4 w-full min-h-[600px] max-md:max-w-full"
        aria-label="Hero section"
      />

      <MissionSection />

      <PurposeSection />

      <Footer />
    </main>
  );
}

export default Desktop1;
