import TabButton from "./TabButton";
import { useState, useTransition } from "react";
import { TAB_DATA } from "../constans";


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="About" className="py-20">
      <div className="md: grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <img
          src="https://nextjs-portfolio-mu-swart.vercel.app/_next/image?url=%2Fimages%2Fabout-image.png&w=640&q=75"
          alt=""
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <a href="#About"></a>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content.map((item, index) => (
              <ul key={index} className="list-disc pl-2">
                <li className="list-none">{item}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;