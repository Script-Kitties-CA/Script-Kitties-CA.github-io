import * as React from "react";

import Sound from "./sound";

import flagBasic from "../audio/flag-basic.mp3";
import flagBonnieTyler from "../audio/flag-bonnie-tyler.mp3";
import flagOwlCity from "../audio/flag-owl-city.mp3";
import flagPartyRock from "../audio/flag-party-rock.mp3";
import flagShots from "../audio/flag-shots.mp3";

const Soundboard = () => {
  return (
    <div className="min-h-screen flex flex-wrap justify-around items-center">
      <Sound audio={flagBasic} title="Basic" />
      <Sound audio={flagBonnieTyler} title="Bonnie Tyler" />
      <Sound audio={flagOwlCity} title="Owl City" />
      <Sound audio={flagPartyRock} title="Party Rock" />
      <Sound audio={flagShots} title="Shots" />
    </div>
  );
};

export default Soundboard;
