import {useRef} from "react";
import { SKILS_AND_TOOLS } from "../constans";
import { motion, useInView } from "framer-motion";

function ToolsAndSkils() {
 const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  

  const variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="mt-4" ref={ref}>
      <div className="flex items-center gap-8 mb-10 whitespace-nowrap">
        <h3 className="text-2xl font-medium text-white py-10">
          Tools & Skils.
        </h3>
        <div className="w-full h-[1px] opacity-30 bg-blue-400"></div>
      </div>
      <ul className="flex gap-x-8 flex-wrap gap-4 lg:gap-y-8 lg:w-[80%] justify-center items-center mx-auto">
        {SKILS_AND_TOOLS.map((item, index) => (
          <motion.li
            key={index}
            variants={variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.1, delay: index * 0.2}}
          >
            <div className="text-center">
              <img
                src={item.img}
                alt={item.title}
                className="h-16 w-16 transition duration-300 ease-in-out hover:scale-110"
                loading="lazy"
              />
              <span className="text-white text-sm mt-2">{item.title}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default ToolsAndSkils;
