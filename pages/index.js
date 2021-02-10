import Head from "next/head";
import AboutSection from "../components/AboutSection";
import HomeSection from "../components/HomeSection";
import ServicesSection from "../components/ServicesSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  console.log(styles.homeButton);
  return (
    <div>
      <Head>
        <title>ฮัวอุยตึ๊ง</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeSection />
        <AboutSection />
        <ServicesSection />
      </main>

      <footer></footer>
    </div>
  );
}
