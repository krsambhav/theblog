import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>the Blog</title>
        <meta name="description" content="the Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen flex flex-col items-center justify-center px-[300px]">
      <NavBar />
        {/* Hello World */}
      </main>
    </div>
  );
};

export default Home;
