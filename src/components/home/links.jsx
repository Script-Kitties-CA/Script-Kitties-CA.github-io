import * as React from "react";

const Links = () => {
  return (
    <div
      className="text-center mt-10 mb-16 mx-auto"
      data-sal="fade"
      data-sal-duration="1000"
      data-sal-delay="100"
      data-sal-easing="ease"
    >
      <div className="w-full flex flex-wrap justify-center">
        <div className="px-5 py-3">
          <a
            className="text-3xl sm:text-4xl text-white"
            href="https://ctftime.org/team/49103"
          >
            <div className="text-center w-52 px-8 py-2 rounded-md shadow-lg bg-violet-300 dark:bg-violet-400 hover:bg-violet-400 dark:hover:bg-violet-500 transition duration-75 ease-out transform hover:scale-103">
              CTFtime
            </div>
          </a>
        </div>
        <div className="px-5 py-3">
          <a
            className="text-3xl sm:text-4xl text-white"
            href="https://github.com/Script-Kitties-CA"
          >
            <div className="text-center w-52 px-8 py-2 rounded-md shadow-lg bg-violet-300 dark:bg-violet-400 hover:bg-violet-400 dark:hover:bg-violet-500 transition duration-75 ease-out transform hover:scale-103">
              GitHub
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
