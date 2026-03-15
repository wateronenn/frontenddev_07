import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import CarPanel from "@/components/CardPanel";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner/>
        <CarPanel/>
        
      </main>
      
    </div>
  );
}