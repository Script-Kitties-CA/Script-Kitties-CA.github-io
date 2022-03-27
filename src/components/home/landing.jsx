import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Yarn from "./yarn";

const Landing = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full 2xl:h-screen">
      <div className="w-9/12 md:w-8/12 lg:w-2/5 xl:w-1/3 mt-16">
        <Yarn />
      </div>
      <div className="mt-16 w-11/12 md:w-8/12 lg:w-2/3 xl:w-1/3">
        <div className="w-9/12 mx-auto">
          <StaticImage
            className="h-full w-full select-none rounded-full shadow-lg"
            src="../../images/logo-white.png"
            alt="Script Kitties logo"
            placeholder="none"
          />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="animate-bounce h-16 w-16 mx-auto mb-2 mt-32"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#787878"
        strokeWidth={1.8}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
};

export default Landing;
