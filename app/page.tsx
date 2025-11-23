'use client';
import Header from "./components/partials/header/header";
import Footer from "./components/partials/footer/footer";
import MenuPage from "./components/menu/MenuPage";
import Hero from "./components/hero/hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      {/* <MenuPage /> */}
      <Footer />
    </>
  );
}
