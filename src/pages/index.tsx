// import axios from "axios";
// import { GetStaticProps } from "next";
import About from "../components/About";
import Banner from "../components/Banner";
import Design from "../components/Design";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home(props: any) {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Design />
      <Footer />
    </>
  );
}
