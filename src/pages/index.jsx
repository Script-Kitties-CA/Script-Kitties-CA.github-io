import * as React from "react";

import SiteMetadata from "../components/seo";
import ThemeSwitcher from "../components/themeswitcher";
import Layout from "../components/layout";
import Landing from "../components/home/landing";
import About from "../components/home/about";

const IndexPage = () => {
  return (
    <Layout>
      <ThemeSwitcher />
      <Landing />
      <About />
    </Layout>
  );
};

export function Head() {
  return <SiteMetadata title="Script Kitties" />;
}

export default IndexPage;
