import Image from "next/image";
import { SiNextdotjs } from "react-icons/si";
import { IoIosHeartEmpty } from "react-icons/io";

export default function Footer() {
  return (
    <div className="mb-10 w-fit flex flex-row items-center gap-1">
      <div className="text">made with</div>{" "}
      <div>
        <IoIosHeartEmpty />
      </div>
      in
      <div>
        <SiNextdotjs />
      </div>
    </div>
  );
}
