import localFont from "next/font/local";
import Head from "next/head";
import Hero from "../components/Hero";
import Snippets from "@/components/Snippets";
import Access from "@/components/Access";
import Workflow from "@/components/Workflow";
import Support from "@/components/Support";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const baiRegular = localFont({
  src: "./fonts/BaiJamjuree-Regular.woff",
  variable: "--baijam-regular",
  weight: "400",
});

const baiSemiB = localFont({
  src: "./fonts/BaiJamjuree-SemiBold.woff",
  variable: "--baijam-semib",
  weight: "600",
});

export default function Home() {
  return (
    <div className={`${baiRegular.variable} font-[family-name:var(--baijam-regular)]`}>
      <Head>
        <meta name="description" content="Clipboard Landing Page" />
        <meta name="keywords" content="Fylo, data storage, data, storage" />
        <meta name="author" content="Mari" />
        <title>Clipboard Landing Page</title>
      </Head>
      <Hero />
      <Snippets />
      <Access />
      <Workflow />
      <Support />
      <Download />
      <Footer />
    </div>
  );
}