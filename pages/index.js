import Head from "next/head";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HomeSection from "../components/HomeSection";
import ReviewSection from "../components/ReviewSection";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ฮัวอุยตึ๊ง HUAYITANG CLINIC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <ReviewSection />
        <ContactSection />
      </main>
    </div>
  );
}
