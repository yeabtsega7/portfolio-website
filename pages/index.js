import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Header from "./component/Header";
import HomeComponent from "./component/HomeComponent";
import About from "./component/About";
import Service from "./component/Service";
import MyWorks from "./component/MyWorks";
import Contact from "./component/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Header />
      <HomeComponent />
      <About />
      <Service />
      <MyWorks />
      <Contact />
    </main>
  );
}
