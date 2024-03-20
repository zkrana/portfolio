"use client";
import SecWrapper from "./components/SecWrapper";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// Importing Activity icon
import { Activity } from "phosphor-react";
import RootLayout, { getPageMetadata } from "./layout";

export default function Home() {
  const pageMetadata = getPageMetadata(
    "Home || Your end to end digital solutions."
  );
  return (
    <RootLayout pageName="Home || Your end to end digital solutions.">
      <Header />
      <SecWrapper />
      <Footer />
    </RootLayout>
  );
}
