import Image from "next/image";
import { HiOutlineBookOpen } from "react-icons/hi";

export default function Post() {
  return (
    <div className="post-main-container w-full md:w-[90%] h-fit md:h-[300px] flex flex-col items-center justify-center md:flex-row border-[.1px] border-black p-5 md:p-10 transition-all duration-200 hover-shadow">
      <div className="post-image-container w-[50vw] md:w-[500px]">
        <Image
          src="https://res.cloudinary.com/demo/image/fetch/https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <div className="post-data-container flex flex-col md:ml-10 mt-10 md:mt-0 items-center">
        <div className="post-title-container text-xl">
          Integrating MongoDB With NextJS
        </div>
        <div className="post-description-container font-light mt-2 md:mt-5">
          In this blog, I write about how I integrated MongoDB inside my chat application made using NextJS.
        </div>
        <div className="post-btns container w-[80px] h-[35px] border-[.1px] border-black mt-5 hidden md:flex flex-row justify-center items-center self-end box-shadow-unhover transition-all duration-200 cursor-pointer hover:bg-black hover:text-white">
          <HiOutlineBookOpen className="" />
        </div>
      </div>
    </div>
  );
}
