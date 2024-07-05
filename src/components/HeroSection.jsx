import Spline from "@splinetool/react-spline";
import { TypeAnimation } from "react-type-animation";
import {ACHIVEMENTSLIST} from "../constans";
import myRoom from "../assets/my-room.webp";
import {INFORMATION} from "../constans";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
     <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12 items-center justify-items-center">
        <div className="col-span-7 place-content-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Hello, I'm{" "}
            </span>
            <br />

            <TypeAnimation
              sequence={[
                "Jose Pertuz",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={15}
              repeat={Infinity}
            />
          </h1>
          <p className="text-primary text-base sm:text-lg lg:text-xl mb-6">
           {INFORMATION.personalInfo.description}
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit  mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              contact me
            </button>
            <button className="px-0.5 py-0.5 rounded-full w-full sm:w-fit  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border border-white mt-3">
              <a
                className="block bg-background hover:bg-slate-800 rounded-full px-5 py-2 font-bold"
                href=""
                download
              >
                Download CV
              </a>
            </button>
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
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
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
    </section>
  );
};

export default HeroSection;
