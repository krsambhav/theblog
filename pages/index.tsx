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
      <main className="w-[90vw] md:w-[800px] flex flex-row flex-wrap justify-center items-center mt-10 gap-10 mb-[100px]">
        <Post
          firstPost={true}
          banner={
            "https://res.cloudinary.com/demo/image/fetch/https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png"
          }
          title={"Integrating MongoDB With NextJS"}
          description={
            "In this blog, I write about how I integrated MongoDB inside my chat application made using NextJS."
          }
        />
        <Post
          banner={
            "https://res.cloudinary.com/demo/image/fetch/https://firebase.google.com/images/brand-guidelines/logo-logomark.png"
          }
          title={"Integrating Firebase With NextJS"}
          description={
            "In this blog, I write about how I integrated Firebase inside my chat application made using NextJS."
          }
        />
        <Post
          banner={
            "https://res.cloudinary.com/demo/image/fetch/https://avatars.githubusercontent.com/u/739550?s=200&v=4"
          }
          title={"Integrating Pusher With NextJS"}
          description={
            "In this blog, I write about how I integrated Pusher inside my chat application made using NextJS."
          }
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
