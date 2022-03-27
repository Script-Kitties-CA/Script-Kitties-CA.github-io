import * as React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Member = (props) => {
  return (
    <div
      className="flex flex-col items-center text-center w-64 my-6 mx-16"
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-delay="500"
      data-sal-easing="ease"
    >
      <GatsbyImage
        className="rounded-full w-64 h-64 mb-4 shadow-lg"
        image={getImage(props.image)}
        alt={props.name}
        placeholder="blurred"
      />
      <p className="text-2xl">{props.name}</p>
      <p className="text-xl">{props.alias}</p>
    </div>
  );
};

export default Member;
