import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header.js";
import NewsSection from './components/NewsSection';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.headerContainer}>
        <Header />
      </header>
      <main className={styles.main}>
        <NewsSection />
      </main>
    </div>
  );
}
