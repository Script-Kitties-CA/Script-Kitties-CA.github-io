import * as React from "react";

import Members from "./members";
import Links from "./links";
import Events from "./events";
import Quote from "./quote";

const About = () => {
  return (
    <div className="flex justify-center w-full mt-8">
      <div className="w-3/4">
        <Links />
        <Events />
        <Members />
        <Quote />
      </div>
    </div>
  );
};

export default About;
