import * as React from "react";

import SiteMetadata from "../components/seo";
import Layout from "../components/layout";


const NotFoundPage = () => {
  return (
    <Layout>
      <SiteMetadata title="Script Kitties - 404" />
      <div className="flex justify-center items-center w-full h-screen">
        <p className="font-bold text-4xl">404: Page not found</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
