import React, { useEffect } from "react";
import mockup from "../images/mockup-1.png";
import mockup_2 from "../images/mockup-2.png";
import mockup_3 from "../images/mockup-3.png";
import mockup_4 from "../images/project-1.png";
import Card from "./Card";
import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDaisyui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    img: mockup,
    title: "Landing Page",
    description:
      "Landing page for travel business website with information about package tours and connect to social media and whatsapp admin",
    link: "https://riskymahendraa.github.io/travelAku-landing-page/",
    link_github: "https://github.com/riskymahendraa/travelAku-landing-page",
    icons: [
      { element: <TiHtml5 />, color: "text-orange-400" },
      { element: <RiTailwindCssFill />, color: "text-cyan-400" },
      { element: <IoLogoJavascript />, color: "text-yellow-300" },
      { element: <SiDaisyui />, color: "text-white" },
    ],
  },
  {
    img: mockup_2,
    title: "Landing Page",
    description:
      "Landing page build for restaurant business with information about menu and connect to social media and whatsapp admin",
    link: "https://riskymahendraa.github.io/restaurant-landing-page/",
    link_github: "https://github.com/riskymahendraa/restaurant-landing-page",
    icons: [
      { element: <TiHtml5 />, color: "text-orange-400" },
      { element: <RiTailwindCssFill />, color: "text-cyan-400" },
      { element: <IoLogoJavascript />, color: "text-yellow-300" },
      { element: <SiDaisyui />, color: "text-white" },
    ],
  },
  {
    img: mockup_3,
    title: "Landing Page",
    description:
      "Landing page build for carwash or motowash business with information about services and connect to social media and whatsapp admin",
    link: "https://riskymahendraa.github.io/motowashweb/",
    link_github: "https://github.com/riskymahendraa/motowashweb",
    icons: [
      { element: <TiHtml5 />, color: "text-orange-400" },
      { element: <IoLogoJavascript />, color: "text-yellow-300" },
      { element: <FaBootstrap />, color: "text-purple-500" },
    ],
  },
  {
    img: mockup_4,
    title: "E-commerce Website",
    description:
      "A shoes e-commerce application featuring product browsing, searchable catalog, and a persistent shopping cart. Frontend is built with React and Context API, while the backend is implemented in Laravel.",
    link_github: "https://github.com/riskymahendraa/e-commerce-sneakers",
    icons: [
      { element: <TiHtml5 />, color: "text-orange-400" },
      { element: <IoLogoJavascript />, color: "text-yellow-300" },
      { element: <RiTailwindCssFill />, color: "text-cyan-400" },
      { element: <SiDaisyui />, color: "text-white" },
      { element: <FaLaravel />, color: "text-red-500" },
      { element: <FaReact />, color: "text-cyan-600" },
      { element: <SiMysql />, color: "text-orange-400" },
    ],
    hideViewButton: true,
  },
];

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="border-b border-slate-800 max-w-xs md:max-w-md lg:max-w-5xl mx-auto pb-10"
    >
      <h1 className="text-2xl text-center font-light my-4 tracking-wide">
        Portfolio
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mx-auto justify-center">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
