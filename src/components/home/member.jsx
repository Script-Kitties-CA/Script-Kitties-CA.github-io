import * as React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Member = (props) => {
  return (
    <div
      className="flex flex-col items-center text-center w-48 sm:w-64 my-6 mx-16 text-stone-900 dark:text-stone-100"
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-delay="500"
      data-sal-easing="ease"
    >
      <div className="light-mode">
        <GatsbyImage
          className="rounded-full w-48 h-48 sm:w-64 sm:h-64 mb-4 shadow-lg outline outline-3 outline-gray-300"
          image={getImage(props.image)}
          alt={props.name}
          placeholder="blurred"
        />
      </div>
      <div className="dark-mode">
        <GatsbyImage
          className="rounded-full w-48 h-48 sm:w-64 sm:h-64 mb-4 shadow-lg outline outline-3 outline-neutral-100"
          image={getImage(props.imageDark)}
          alt={props.name}
          placeholder="blurred"
        />
      </div>
      <p className="text-2xl">{props.name}</p>
      <p className="text-xl">{props.alias}</p>
      {props.url && (
        <a href={props.url} target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 stroke-stone-900 dark:stroke-stone-100 hover:scale-103"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.9}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )}
    </div>
  );
};

export default Member;
