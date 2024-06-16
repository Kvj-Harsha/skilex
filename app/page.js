import Image from "next/image";
import Header from "./_components/header";
import Hero from "./_components/hero";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <Header /> 
      <Hero />
      <Footer/>
    </div>
  )
}
