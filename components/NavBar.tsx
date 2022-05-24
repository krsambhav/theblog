import Image from "next/image";
import logo from "../public/static/logo.png";
import NavButton from "./NavButton";
import {GoHome} from 'react-icons/go';
import {BsFilePost, BsPerson} from 'react-icons/bs';


export default function NavBar() {
  return (
    <div className="w-[95vw] md:w-[800px] flex flex-row items-center justify-between">
      <div className="logo-container">
        <Image src={logo} width={100} height={100} />
      </div>
      <div className="nav-btns-container flex flex-row">
        <NavButton text={'Home'} icon={<GoHome />} />
        <NavButton text={'Posts'} icon={<BsFilePost />} />
        <NavButton text={'Contact'} icon={<BsPerson />} />
      </div>
    </div>
  );
}
