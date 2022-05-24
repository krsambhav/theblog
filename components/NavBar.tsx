import Image from "next/image";
import logo from '../public/static/logo.png';

export default function NavBar () {
  return (
    <>
    <Image src={logo} width={300} height={300} />
    </>
  )
}