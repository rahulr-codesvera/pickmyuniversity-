import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/banner/Banner";
import Partners from "@/components/partners/Partners";
import Destinations from "@/components/destinations/Destinations";
import About from "@/components/about/About";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <main>
      <Banner />
      <Partners />
      <Destinations />
      <About />
      <Services />
    </main>
  );
}
