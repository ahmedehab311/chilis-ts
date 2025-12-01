'use client';
import MenuPage from "./components/menu/MenuPage";
import Hero from "./components/hero/hero";
import AboutUs from "./components/aboutUsForLang/aboutUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <MenuPage />
    </>
  );
}
