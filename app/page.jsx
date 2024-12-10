import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/banner/Banner";
import Partners from "@/components/partners/Partners";

export default function Home() {
  return (
    <main>
      <Banner />
      <Partners />
    </main>
  );
}
