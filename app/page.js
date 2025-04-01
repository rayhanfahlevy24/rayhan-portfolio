"use client";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

export default function Home() {

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Footer />
    </>
  );
}