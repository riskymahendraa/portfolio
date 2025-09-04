import React from "react";
import Button from "./Button";
import { FaEye, FaGithub } from "react-icons/fa";

const Card = ({
  img,
  classname = "",
  title,
  description = "Description",
  link = "/",
  hideViewButton = false,
  hideGithubButton = false,
  link_github = "/",
  icons = [], // array of { element, color, extraClass }
}) => {
  return (
    <div
      className={`card card-compact bg-base-100 w-full my-4 mx-auto shadow-lg rounded-2xl overflow-hidden 
              hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ${classname}`}
    >
      {/* Gambar */}
      <figure>
        <img
          src={img}
          alt={title}
          className="h-64 w-full object-cover object-top"
        />
      </figure>

      {/* Body */}
      <div className="card-body bg-neutral-900 flex flex-col">
        {/* Title */}
        <h2 className="card-title text-xl font-semibold text-white">{title}</h2>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed border-b border-slate-800 pb-4 mb-4">
          {description}
        </p>

        {/* Icons */}
        <div className="flex flex-wrap gap-3 justify-center items-center mb-6">
          {icons.map((icon, idx) => (
            <div
              key={idx}
              className={`bg-base-100 border-2 rounded-xl border-slate-800 px-3 py-2 flex items-center justify-center ${
                icon.extraClass || ""
              }`}
            >
              <div className={`text-3xl ${icon.color}`}>{icon.element}</div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-auto">
          {/* Github Button */}
          {!hideGithubButton && (
            <a href={link_github} rel="noopener noreferrer" target="_blank">
              <Button
                classname="bg-orange-500 hover:bg-orange-400 rounded-full p-2 transition-all duration-300"
                text={<FaGithub className="text-xl text-black" />}
              />
            </a>
          )}

          {/* View Button */}
          {!hideViewButton && (
            <a href={link} rel="noopener noreferrer" target="_blank">
              <Button
                classname="bg-orange-500 text-black hover:bg-orange-400 rounded-full p-2 transition-all duration-300"
                text={<FaEye className="text-xl text-black" />}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
