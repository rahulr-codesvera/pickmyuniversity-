import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/banner/Banner";
import Partners from "@/components/partners/Partners";
import Destinations from "@/components/destinations/Destinations";
import About from "@/components/about/About";

export default function Home() {
  return (
    <main>
      <Banner />
      <Partners />
      <Destinations />
      <About />
    </main>
  );
}
