import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}
