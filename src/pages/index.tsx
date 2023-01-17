// import axios from "axios";
// import { GetStaticProps } from "next";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home(props: any) {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
}
