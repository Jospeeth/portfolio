import Spline from "@splinetool/react-spline";
import { TypeAnimation } from "react-type-animation";
import { ACHIVEMENTSLIST, INFORMATION } from "../constans";
import myRoom from "../assets/my-room.webp";
import ButtonLink from "./modules/ButtonLink";
import "./styles.css";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12 items-center justify-items-center">
        <div className="col-span-7 place-content-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Hello, I'm{" "}
            </span>
            <br />

            <TypeAnimation
              sequence={["Jose Pertuz", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={15}
              repeat={Infinity}
            />
          </h1>
          <p className="text-primary text-base sm:text-lg lg:text-2xl mb-6 text-start">
            {INFORMATION.personalInfo.description}
          </p>
          <div className=" flex gap-x-4">
            <ButtonLink
              text="Contact me"
              link="mailto:japertuzd@gmail.com"
              img="/mail.svg"
            />

            <ButtonLink
              text="Linkedin"
              link="https://www.linkedin.com/in/josepertuz/"
              img="/linkedin-icon-mini.svg"
            />
          </div>
        </div>

        <div className="col-span-5">
          <div className="block lg:hidden">
            <img
              src={myRoom}
              alt="Mobile Image"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="hidden lg:block">
            <Spline scene="https://prod.spline.design/lNwK-ueWrwZ3HSIv/scene.splinecode" />
          </div>
        </div>
      </div>
      <div className="py-2 px-4 xl:gap-16 sm:py-12 xl:px-16 flex justify-center">
        <div className="sm:border-[#536ef3] sm:border rounded-md py-2 px-16 flex flex-col sm:flex-row items-center justify-between w-3/5">
          {ACHIVEMENTSLIST.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
              >
                <h2 className="text-white text-4xl font-bold flex flex-row">
                  <span className="text-[#ADB7BE] text-5xl">
                    {achievement.value}
                  </span>
                  {achievement.postfix}
                </h2>
                <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" hidden  md:flex md:justify-center">
        <div className="scrolldown">
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
