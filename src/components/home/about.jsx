import * as React from "react";

import Links from "./links";
import Email from "./email";

const About = () => {
  return (
    <div className="flex justify-center w-full mt-8">
      <div className="w-3/4">
        <Links />
        <Email />
      </div>
    </div>
  );
};

export default About;
