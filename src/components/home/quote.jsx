import * as React from "react";

const Quote = () => {
  return (
    <>
      <p
        className="text-xl text-center mt-8 mb-6 text-stone-900 dark:text-stone-100 dark:bg-zinc-800 bg-neutral-100 mx-auto w-full sm:w-1/2 md:w-1/3 xl:w-1/4 pt-1 pb-2 px-2 rounded-lg shadow-lg outline outline-2 outline-neutral-300"
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-delay="900"
        data-sal-easing="ease"
      >
        "Being bad at CTFs is a good reason to do CTFs"
      </p>
    </>
  );
};

export default Quote;
