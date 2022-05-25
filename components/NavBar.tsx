import Image from "next/image";
import logo from "../public/static/logo.png";
import NavButton from "./NavButton";
import { GoHome } from "react-icons/go";
import { BsFilePost, BsPerson } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { CgMenuMotion } from "react-icons/cg";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-[90vw] md:w-[800px] flex flex-row items-center justify-between">
      <div className="logo-container">
        <Link href={"/"}>
          <a>
            <Image src={logo} width={100} height={100} />
          </a>
        </Link>
      </div>
      <div className="nav-btns-container flex flex-row items-center">
        <CgMenuMotion className="md:hidden w-8 h-8" />
        <Link href={"/"}>
          <a>
            <NavButton text={"Home"} icon={<GoHome />} onlyPC={true} />
          </a>
        </Link>

        <NavButton text={"Posts"} icon={<BsFilePost />} onlyPC={true} />
        <Link href={"/contact"}>
          <a>
        <NavButton text={"Contact"} icon={<BsPerson />} onlyPC={true} />
        </a>
        </Link>
        <Link href="/login">
          <a>
            <NavButton icon={<FiLogIn className="h-[20px]" />} onlyPC={true} />
          </a>
        </Link>
      </div>
    </div>
  );
}
