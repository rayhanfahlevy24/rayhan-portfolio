import { assets, workData } from "../assets/assets";
import React, { useState } from "react";
import Image from "next/image";

const Work = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const isExpanded = visibleProjects >= workData.length; 

  const toggleProjects = () => {
    if (isExpanded) {
      setVisibleProjects(4); 
    } else {
      setVisibleProjects(workData.length); 
    }
  };

  return (
    <div id="project" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center sm:mt-8 mb-2 text-lg font-Poppins">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Poppins">Latest work</h2>

      <div className="grid grid-cols-auto my-10 gap-5">
        {workData.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            onClick={() => {
              if (project.link) {
                window.open(project.link, "_blank"); 
              }
            }}
          >
            <div className="bg-white w-full absolute bottom-0 left-0 right-0 py-2 px-5 flex items-center justify-between duration-500 group-hover:bottom-2 border-2 border-gray-400 rounded-bl-lg rounded-br-lg">
              <div>
                <h2 className="font-Poppins font-medium">{project.title}</h2>
                <p className="font-Poppins font-medium text-sm text-gray-700">{project.description}</p>
              </div>
              {/* <div
                className="border rounded-full border-black w-7 aspect-square flex items-center justify-center
              shadow-[2px_2px_0_#000] group-hover:bg-slate-200 transition"
              >
                <Image src={assets.mouse} alt="send icon" className="w-4" />
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={toggleProjects}
        className="font-Poppins font-medium w-max flex items-center justify-center gap-2 border-gray-400 border-2 rounded-full py-3 
        px-10 mx-auto my-20 hover:bg-slate-200 transition"
      >
        {isExpanded ? "Show less" : "Show more"}
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </button>
    </div>
  );
};

export default Work;