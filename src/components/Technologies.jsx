import React from "react";
import { FaBootstrap, FaCss3, FaReact } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
const Technologies = () => {
  return (
    <div className=" border-slate-800 border-b max-w-xs md:max-w-md lg:max-w-5xl mx-auto my-2 pb-10">
      <h1 className="text-2xl text-center font-light my-4 tracking-wide ">
        Technologies
      </h1>
      <div className="flex gap-3 flex-wrap mx-auto justify-center mt-5 items-center">
        <div className=" rounded-2xl border-4 border-slate-800 px-3 py-2">
          <TiHtml5 className="text-5xl md:text-3xl text-orange-400" />
        </div>
        <div className=" rounded-2xl border-4 border-slate-800 px-3 py-2">
          <RiTailwindCssFill className="text-5xl md:text-3xl text-cyan-400" />
        </div>
        <div className=" rounded-2xl border-4 border-slate-800 px-3 py-2">
          <FaReact className="text-5xl md:text-3xl text-cyan-500" />
        </div>
        <div className=" rounded-2xl border-4 border-slate-800 px-3 py-2">
          <IoLogoJavascript className="text-5xl md:text-3xl text-yellow-300" />
        </div>
        <div className=" rounded-2xl border-4 border-slate-800 px-3 py-2">
          <FaBootstrap className="text-5xl md:text-3xl text-purple-500" />
        </div>
        <div className=" rounded-2xl border-4 border-slate-800 px-3 py-2">
          <FaCss3 className="text-5xl md:text-3xl text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
