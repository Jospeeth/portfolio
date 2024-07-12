import React from "react";

const ProjectCard = ({
  image,
  title,
  description,
  git,
  previewUrl,
  tegnologies,
}) => {
  return (
    <div className="bg-zinc-900 p-5 rounded-2xl sm:w-[360px] w-full ">
      <div className="h-48 md:h-56 rounded-t-xl relative group">
        <img
          src={image}
          alt={title}
          className="object-cover object-top rounded-lg w-full transition duration-500  md:group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
        <a
          href={git}
          className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
        </a>
        <a
          href={previewUrl}
          className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </a>
      </div>

      <div className="text-white rounded-b-xl bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-4 mt-4 md:mb-6 md:mt-0">{title}</h5>
        <p className="text-[#ADB7BE] text-[14px]  my-2">{description}</p>
        <div className="flex gap-x-2">
          <a className="inline-flex items-center justify-center gap-2 px-2 py-2 space-x-2 
            transition bg-gray-800 border border-gray-600 
            hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl
             focus:outline-none focus-visible:outline-none focus-visible:ring
             focus-visible:ring-white focus-visible:ring-offset-2 active:bg-purple-500" href={git} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>

<a className="inline-flex items-center justify-center gap-2 px-2 py-2 space-x-2 
            transition bg-gray-800 border border-gray-600 
            hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl
             focus:outline-none focus-visible:outline-none focus-visible:ring
            focus-visible:ring-white focus-visible:ring-offset-2 active:bg-purple-500" href={previewUrl} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="link"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </a>
        </div>
        <div className="flex space-x-2 mt-4">
          {tegnologies.map((tegnology, index) => (
            <span key={index} className="text-xs text-blue-400 font-extralight">
              #{tegnology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
