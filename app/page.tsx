import { inter, popins } from "@/assets/fonts";
import { lazy } from "react";

import dynamic from "next/dynamic";
import Loading from "@/components/global/Loading";
import Facilities from "@/components/pages/Facilities";


const Navbar = dynamic(() => import("@/components/global/Navbar"), {loading: () => <Loading />});
const Background = dynamic(() => import("@/components/pages/Background"), {loading: () => <Loading />});
const Main = dynamic(() => import("@/components/pages/Main"), {loading: () => <Loading />});
const Teachers = dynamic(() => import("@/components/pages/Teachers"), {loading: () => <Loading />, ssr: false})
const Events = dynamic(() => import("@/components/pages/Events"), {loading: () => <Loading />});
const Footer = dynamic(() => import("@/components/global/Footer"), {loading: () => <Loading />});

export default function Home() {
  return (
  <>
    <main className={`${inter.className} ${popins.variable}`}>
    <Background>
      <Navbar />
      <Main />
    </Background>
      <Facilities />
    <Teachers />
      <Events />
      <Footer />
    </main>
  </>
  );
}
