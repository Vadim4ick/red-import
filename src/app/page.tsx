import { About } from "@/components/About";
import { Advantages } from "@/components/Advantages";
import { Catalog } from "@/components/Catalog";
import { MainSection } from "@/components/MainSection";

export default function Home() {
  return (
    <>
      <MainSection />

      <Advantages />

      <Catalog />

      {/*    <About /> */}
    </>
  );
}
