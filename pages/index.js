import Head from "next/head";
import Image from "next/image";
import logo from "../img/moppersLogga.png";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className=" max-w-4xl mx-auto">
        <Image
          src={logo}
          objectPosition="center top"
          alt="Moppers logo"
          layout="intrinsic"
        />
        <h1 className=" text-4xl text-center">Våran helt egna sajt!</h1>
      </main>
    </div>
  );
}
