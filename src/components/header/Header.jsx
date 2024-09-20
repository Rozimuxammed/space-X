import React from "react";
import Navbar from "./navbar/Navbar";
function Header() {
  return (
    <>
    <Navbar/>
    <div className="container m-auto text-white text-center mt-20 pb-20 sm:pb-0 sm:mt-10">
      <h1 className="text-5xl tracking-widest mb-5 sm:text-xl sm:mb-1 md:text-3xl md:mb-3 xl:text-5xl">Falcon Heavy</h1>
      <p className="lowercase mb-7 sm:text-xs">The most powerful operational rocket <br />   in the world by a factor of two</p>
      <div className="w-[1px] h-[59px] bg-white ml-[50%] sm:h-[30px]"></div>
    </div>
    <div className="w-full h-screen bg-[url('./public/earth.png')] bg-no-repeat bg-center bg-cover sm:h-[400px] md:h-[550px] lg:h-screen"></div>
    </>
  );
}

export default Header;
