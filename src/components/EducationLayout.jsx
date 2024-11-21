import React, { useEffect } from "react";
import Education from "./Education";
import Aos from "aos";
import "aos/dist/aos.css";

const EducationLayout = (props) => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="100"
        className="border-slate-800 border-b max-w-xs md:max-w-md lg:max-w-5xl mx-auto pb-10"
      >
        <h1 className="text-2xl text-center font-light my-3 tracking-wide">
          Education
        </h1>
        <div className="relative w-full md:w-1/2 border-l-2 border-slate-800 mx-auto lg:mx-72">
          <Education
            title={"Institut Teknologi dan Bisnis Stikom Bali"}
            description2={"Denpasar, Bali"}
            description={
              "I Was Graduated From Institute Technology and Business Stikom Bali In 2021 With A Major In Information Systems, Achieving A GPA Of 3.6"
            }
          />
          <div className="absolute top-5 -left-3 p-2 w-0.5 border-2 border-orange-400 rounded-full bg-slate-800">
            {" "}
          </div>
          <div className="relative">
            <Education
              title={"SMA Negeri 1 Kediri"}
              description2={"Kediri, Bali"}
              description={"I Was Graduated From SMA Negeri 1 Kediri In 2017."}
            />
            <div className="absolute top-5 -left-3 p-2 w-0.5 border-2 border-orange-400 rounded-full bg-slate-800">
              {" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationLayout;
