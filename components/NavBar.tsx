import Image from "next/image";
import logo from "../public/static/logo.png";
import NavButton from "./NavButton";
import { GoHome } from "react-icons/go";
import { BsFilePost, BsPerson } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { CgMenuMotion } from "react-icons/cg";
import Link from "next/link";
import { Slant as Hamburger, Slant, Squeeze } from "hamburger-react";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="w-[85vw] md:w-[800px] flex flex-row items-center justify-between">
      <div className="logo-container">
        <Link href={"/"}>
          <a>
            <Image src={logo} width={100} height={100} />
          </a>
        </Link>
      </div>
      <div className="nav-btns-container flex flex-row items-center">
        <div className="md:hidden w-8 h-8 z-20">
          <Squeeze
            toggled={isOpen}
            toggle={setOpen}
            color={isOpen === true ? "black" : "black"}
          />
        </div>

          <div className={`fixed bg-white w-screen h-screen top-0 left-0 z-10 transition-all flex flex-col items-center gap-10 text-2xl pt-32 ${isOpen === true ? 'menu-mobile' : 'hidden'}`}>
            <Link href={"/"}>
              <a>
                <NavButton text={"Home"} icon={<GoHome />} />
              </a>
            </Link>
            <NavButton text={"Posts"} icon={<BsFilePost />} />
            <Link href={"/contact"}>
              <a>
                <NavButton text={"Contact"} icon={<BsPerson />} />
              </a>
            </Link>
          </div>

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
