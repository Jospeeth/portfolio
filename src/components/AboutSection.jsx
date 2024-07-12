import { INFORMATION } from "../constans";
import ToolsAndSkils from "./ToolsAndSkils";
const AboutSection = () => {


  return (
    <section id="About" className="pb-2 py-24">
      <div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <a href="#About"></a>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base text-primary lg:text-lg max-w-3xl leading-7 ">
            {INFORMATION.aboutMe.description}
          </p>
          <div className="flex flex-row justify-center ">
            
            <ToolsAndSkils />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
