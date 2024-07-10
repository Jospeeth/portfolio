import TabButton from "./TabButton";
import { useState, useTransition } from "react";
import { TAB_DATA } from "../constans";
import { INFORMATION } from "../constans";
import me from "../assets/me.jpg";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      id="About"
      className="pb-8 py-6
    "
    >
      <div className="md: grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <a href="#About"></a>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base text-primary lg:text-lg">
            {INFORMATION.aboutMe.description}
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
          <div className="mt-4 min-h-[200px]  ">
            {TAB_DATA.find((t) => t.id === tab).content.map((item, index) => (
              <ul key={index} className="list-disc pl-2">
                <li className="list-none">{item}</li>
              </ul>
            ))}
          </div>
        </div>
        <img
          src={me}
          alt="Jose Pertuz picture"
          className="rounded-full w-[400px] "
        />
      </div>
    </section>
  );
};

export default AboutSection;
