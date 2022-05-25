import Head from "next/head";
import NavBar from "../../components/NavBar";
import { MdOutlineNavigateNext } from "react-icons/md";
import Image from "next/image";

export default function Post() {
  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <Head>
        <title>Login</title>
      </Head>
      <NavBar />
      {/* <main className="w-[90vw] md:w-[800px] flex flex-col mt-10 gap-5 mb-[100px]">
        <div className="post-banner">
          <Image src={'https://res.cloudinary.com/demo/image/fetch/https://techcrunch.com/wp-content/uploads/2019/06/MongoDB_Logo_FullColorBlack_RGB.png'} layout='responsive' height={26} width={100} />
        </div>
        <div className="post-title text-4xl font-bold">
          Integrating MongoDB With NextJS
        </div>
        <div className="post-time font-light">3 Minute Read</div>
        <div className="post-content text-lg font-light flex flex-col gap-5">
          <div className="paragraph">
            Consider a product development without monolithic manufacturers.
            Today's software innovation process is bringing that concept closer
            to reality. Open source software projects have resulted in
            community- powered innovation, development, and consumption.
            Manufacturer-centered development strategies, which have long been
            the foundation, have a significant disadvantage in such communities.
            Each user, whether a single user or an organization, can produce
            exactly what they want without requiring a manufacturer to act as
            their representative.
          </div>
          <div className="paragraph">
            The open source software phenomena has recently evolved into a more
            mainstream and commercially viable form, which we might call the new
            era of OSS. This transition can be demonstrated using a foundation
            of process and product factors. The street market analogy, which was
            previously associated with the open source development process, has
            shifted to become a metaphor better suited to the new OSS product
            delivery and support process era.
          </div>
        </div>
      </main> */}
    </div>
  );
}
