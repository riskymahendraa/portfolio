import React from "react";
import Button from "./Button";
import profile from "../images/profile.jpeg";
import myResume from "../assets/cvKerja.pdf";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 max-w-xs md:max-w-md lg:max-w-5xl mx-auto mt-16 border-slate-800 border-b pb-10">
      <div>
        <h1 className="text-2xl font-light">
          RISKY <span className="text-orange-500 tracking-wide">MAHENDRA</span>
        </h1>
        <div className="my-2 font-bold tracking-wide">Web Developer</div>
        <div className="my-3 text-sm leading-relaxed tracking-wide text-justify">
          "Hi, I’m Risky Mahendra 👋 A Web Developer from Bali who loves
          creating beautiful, functional, and responsive websites. Coding is not
          just my job—it’s something I truly enjoy. I’m especially passionate
          about website development and always eager to learn the latest web
          technologies."
        </div>
        <a href={myResume} download>
          <Button
            text={"Download CV"}
            classname={
              "bg-orange-500 btn-md font-bold hover:bg-orange-400 hover:scale-105 hover:transition-all hover:duration-300"
            }
          />
        </a>
      </div>
      <div className="flex justify-center my-2 items-center">
        <div>
          <img
            src={profile}
            className="rounded-full text-2xl font-bold h-72 w-72 shadow-md shadow-orange-500 object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
