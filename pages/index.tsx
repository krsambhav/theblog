import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

const Home: NextPage = () => {
  const [postData, setPostData] = useState<any>([]);
  const [contentLoaded, setContentLoaded] = useState<boolean>(false);
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPostData(data)).then(() => setContentLoaded(true));
  }, []);
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
      <main className="w-[90vw] md:w-[800px] flex flex-row flex-wrap justify-center items-center mt-10 gap-10 mb-[100px]">
        {!contentLoaded && <ClimbingBoxLoader size={15} />}
        {postData.map((post:any, index:number) => {
          return <Post
            banner={post.banner}
            title={post.title}
            description={post.description}
            key={index}
            firstPost={index === 0}
          />;
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
