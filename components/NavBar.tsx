import Image from "next/image";
import logo from "../public/static/logo.png";
import NavButton from "./NavButton";
import {GoHome} from 'react-icons/go';
import {BsFilePost, BsPerson} from 'react-icons/bs';
import {FiLogIn} from 'react-icons/fi';
import {CgMenuMotion} from 'react-icons/cg';


export default function NavBar() {
  return (
    <div className="w-[90vw] md:w-[800px] flex flex-row items-center justify-between">
      <div className="logo-container">
        <Image src={logo} width={100} height={100} />
      </div>
      <div className="nav-btns-container flex flex-row items-center">
        <CgMenuMotion className="md:hidden w-8 h-8" />
        <NavButton text={'Home'} icon={<GoHome />} onlyPC={true} />
        <NavButton text={'Posts'} icon={<BsFilePost />} onlyPC={true} />
        <NavButton text={'Contact'} icon={<BsPerson />} onlyPC={true} />
        <NavButton icon={<FiLogIn />} onlyPC={true} />
      </div>
    </div>
  );
}
