import image_1 from "../images/image-1.jpg";
import image_2 from "../images/image-2.jpg";
import "aos/dist/aos.css";

const About = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="border-slate-800 border-b max-w-xs md:max-w-md lg:max-w-5xl mx-auto"
    >
      <h1 className="text-2xl text-center font-light my-3 tracking-wide">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="grid lg:grid-cols-2 gap-8 mx-auto pb-10">
        <div>
          <img
            src={image_1}
            alt=""
            className="rounded-md object-cover my-2 h-56 w-full"
          />
        </div>
        <div className="flex justify-center items-center font-light tracking-tight text-sm md:text-base">
          <p>
            Let me introduce myself my name is Risky Mahendra, and I have an
            interest in website development. I was graduated from{" "}
            <span className="text-orange-500 font-bold">
              Institution Technology and Business Stikom Bali
            </span>{" "}
            in 2021 with a major in Information Systems, achieving a GPA of 3.6
          </p>
        </div>
        <div className="flex justify-center items-center font-light tracking-tight text-sm md:text-base">
          <p>
            I have a goal to keep growing, learning new things, enhancing my
            skills, and starting a career in the technology field. I would give
            a full commitment and coopertation in teamwork. I am punctual person
            and can manage my time properly.
          </p>
        </div>
        <div>
          <img
            src={image_2}
            alt=""
            className="rounded-md object-cover my-2 h-56 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
