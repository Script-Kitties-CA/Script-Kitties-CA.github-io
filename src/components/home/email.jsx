import * as React from "react";
import Obfuscate from 'react-obfuscate';

const Email = () => {
  const emailEncoded = "c2NyaXB0a2l0dGllcy5jYUBnbWFpbC5jb20="
  return (
    <>
      <p
        className="text-xl text-center mt-8 mb-6 text-stone-900 dark:text-stone-100 dark:bg-gray-custom bg-neutral-50 mx-auto w-fit pt-1 pb-2 px-5 rounded-lg shadow-lg outline outline-2 outline-neutral-300"
        data-sal="fade"
        data-sal-duration="1000"
        data-sal-delay="900"
        data-sal-easing="ease"
      >
        <Obfuscate
          email={atob(emailEncoded)}
        />
      </p>
    </>
  );
};

export default Email;
