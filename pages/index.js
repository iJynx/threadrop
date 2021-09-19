import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Preview from "../components/Preview";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-grey-dark text-white font-VCR">
      <Head>
        <title>Threadrops</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex flex-col divide-y-4 divide-indigo-600 divide-dotted">
        <Navbar />
        <Hero />
        <Features />
        <Preview />
        <Contact />
        <Footer />
      </main>     
    </div>
  );
}
