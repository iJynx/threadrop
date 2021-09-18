import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col bg-grey-dark text-white font-VCR">
      <Head>
        <title>Threadrops</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex flex-col">
        <Navbar />
        <Hero />

      </main>

      <div>feature section</div>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Threadrop Inc.
        </a>
      </footer>
    </div>
  );
}
