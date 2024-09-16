"use client";

import { About } from "@/components/About";
import { Advantages } from "@/components/Advantages";
import { Cases } from "@/components/Cases";
import { Catalog } from "@/components/Catalog";
import { FormFeedback } from "@/components/FormFeedback";
import { Leasing } from "@/components/Leasing";
import { MainSection } from "@/components/MainSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <Advantages />
      <Catalog />
      <About />
      <Cases />
      <Leasing />
      <FormFeedback />
    </>
  );
}
