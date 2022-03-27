import * as React from "react";

import Members from "./members";
import CTFtime from "./ctftime";
import Quote from "./quote";

const About = () => {
  return (
    <div className="flex justify-center w-full mt-8">
      <div className="w-3/4">
        <CTFtime />
        <Members />
        <Quote />
      </div>
    </div>
  );
};

export default About;
