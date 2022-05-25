import Image from "next/image";
import { HiOutlineBookOpen } from "react-icons/hi";

export default function Post({
  firstPost,
  banner,
  title,
  description,
}: {
  firstPost?: boolean;
  banner:any;
  title:string;
  description:string;
}) {
  return firstPost == true ? (
    <div className="post-main-container w-full md:w-[90%] h-fit md:h-[300px] flex flex-col items-center justify-center md:flex-row border-[.1px] border-black p-5 md:p-10 transition-all duration-200 hover-shadow cursor-pointer">
      <div className="post-image-container w-[50vw] md:w-[500px]">
        <Image
          src={banner}
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <div className="post-data-container flex flex-col md:ml-10 mt-10 md:mt-0 items-center">
        <div className="post-title-container text-xl">
          {title}
        </div>
        <div className="post-description-container font-light mt-2 md:mt-5">
          {description}
        </div>
        {/* <div className="post-btns container w-[80px] h-[35px] border-[.1px] border-black mt-5 hidden md:flex flex-row justify-center items-center self-end box-shadow-unhover transition-all duration-200 cursor-pointer hover:bg-black hover:text-white">
          <HiOutlineBookOpen className="" />
        </div> */}
      </div>
    </div>
  ) : (
    <div className="post-main-container w-[full] md:w-[42%] h-fit md:h-[300px] flex flex-col border-[.1px] border-black p-5 md:p-0 transition-all duration-200 hover-shadow items-center justify-center cursor-pointer">
      <div className="post-image-container w-[50vw] md:w-[100px]">
        <Image
          src={banner}
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <div className="post-data-container flex flex-col md:mx-3 mt-10 items-center">
        <div className="post-title-container text-xl text-center">
          {title}
        </div>
        <div className="post-description-container font-light mt-2 md:mt-5 text-center">
          {description}
        </div>
      </div>
    </div>
  );
}
