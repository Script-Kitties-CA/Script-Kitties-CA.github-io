import * as React from "react";

import SiteMetadata from "../components/seo";
import Layout from "../components/layout";
import Landing from "../components/home/landing";
import About from "../components/home/about";

const IndexPage = () => {
  return (
    <Layout>
      <SiteMetadata title="Script Kitties - Home" />
      <Landing />
      <About />
    </Layout>
  );
};

export default IndexPage;
