import Head from "next/head";
import NavBar from "../components/NavBar";
import {MdOutlineNavigateNext} from 'react-icons/md';

export default function login() {
  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <Head>
        <title>Login</title>
      </Head>
      <NavBar />
      <main className="w-[90vw] md:w-[800px] flex flex-col items-center mt-10 gap-5 mb-[100px]">
        <div className="login-box-container h-[550px] w-[350px] bg-gradient-to-br from-rose-50 to-blue-50 rounded-3xl flex flex-col items-center justify-center gap-3 px-10 drop-shadow-2xl">
          <div className="hello-container text-xl font-normal font-[poppins]">
            Hello Again!
          </div>
          <div className="hello-container text-md font-light font-[poppins]">
            Welcome Back!
          </div>
          <input
            type="text"
            className="mt-10 w-[250px] h-[40px] rounded-xl placeholder:font-light px-3 font-[poppins] outline-none text-right placeholder:text-left"
            placeholder="Username"
          />
          <input
            type="text"
            className="mt-3 w-[250px] h-[40px] rounded-xl placeholder:font-light px-3 font-[poppins] outline-none text-right placeholder:text-left"
            placeholder="Password"
          />
          <div className="mt-10 sign-in-btn h-[40px] w-[250px] bg-red-400 rounded-xl font-[poppins] font-normal flex flex-row justify-center items-center text-white cursor-pointer transition-all duration-200 border border-transparent hover:border-red-400 hover:bg-transparent hover:text-red-400 text-2xl">
            <MdOutlineNavigateNext />
          </div>
        </div>
      </main>
    </div>
  );
}
