import * as React from "react";

import SiteMetadata from "../components/seo";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <p className="font-bold text-4xl text-stone-900 dark:text-stone-100">
          404: Page not found
        </p>
        {/* <a href="/" className="text-3xl my-10 underline">Home</a> */}
        <div className="px-5 py-3 my-10">
          <a className="text-3xl sm:text-4xl text-white" href="/">
            <div className="text-center w-52 px-8 py-2 rounded-md shadow-lg bg-violet-300 dark:bg-violet-400 hover:bg-violet-400 dark:hover:bg-violet-500 transition duration-75 ease-out transform hover:scale-103">
              Home
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export function Head() {
  return <SiteMetadata title="Script Kitties - 404" />;
}

export default NotFoundPage;
