import * as React from "react";

const Sound = (props) => {
  let audio = new Audio(props.audio);

  const start = () => {
    audio.play();
  };

  return (
    <div>
      <button
        onClick={start}
        class="text-white text-3xl text-center w-64 h-36 mx-8 my-8 px-8 py-2 rounded-md shadow-lg bg-violet-300 dark:bg-violet-400 hover:bg-violet-400 dark:hover:bg-violet-500 transition duration-75 ease-out transform hover:scale-103"
      >
        {props.title}
      </button>
    </div>
  );
};

export default Sound;
