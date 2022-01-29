import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white drop-shadow-md w-full min-h-[5rem] h-20 flex justify-center ">
      <div className="flex justify-between h-full items-center w-[80%]">
        <div className="text-black font-bold text-2xl w-[128px]">LOGO</div>
        <div className=" mx-24 w-full max-w-[600px] flex">
          <ul className="flex justify-between w-full">
            <li className="text-sm">Home</li>
            <li className="text-sm">Oportunidades</li>
            <li className="text-sm">Fale Conosco</li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <i className="bx bx-flag text-2xl text-[#cccccc] mr-5 "></i>
          <i className="bx bxs-sun text-2xl text-[#cccccc] mr-5 "></i>
          <button className="w-10 h-10 bg-[#f5f6f5] rounded-full"></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
