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
        <div className="my-3">
          Hi, I am Risky Mahendra. I am a Web Developer based in Bali,
          Indonesia. i really enjoy coding and learning new things esspecially
          frontend development.
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
