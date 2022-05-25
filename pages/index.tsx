import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <Head>
        <title>the Blog</title>
        <meta name="description" content="the Blog" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@0,200;0,300;0,400;1,200;1,300&family=Titillium+Web:ital,wght@0,200;0,300;0,400;1,200;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <main className="w-[90vw] md:w-[800px] flex flex-col items-center mt-10 gap-5 mb-[100px]" >
        <Post />
        <Post />
        <Post />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
