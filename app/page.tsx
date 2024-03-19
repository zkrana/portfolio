"use client";
import SecWrapper from "./components/SecWrapper";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// Importing Activity icon
import { Activity } from "phosphor-react";

export default function Home() {
  return (
    <>
      <Header />
      <SecWrapper />
      <Footer />
    </>
  );
}
