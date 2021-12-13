import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Samuel's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Navbar />
      {/* hero */}
      <Hero />
      <Footer />
    </div>
  );
}
