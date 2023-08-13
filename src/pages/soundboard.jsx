import * as React from "react";

import SiteMetadata from "../components/seo";
import ThemeSwitcher from "../components/themeswitcher";
import Layout from "../components/layout";
import Soundboard from "../components/soundboard/soundboard";

const IndexPage = () => {
  return (
    <Layout>
      <ThemeSwitcher />
      <Soundboard />
    </Layout>
  );
};

export function Head() {
  return <SiteMetadata title="Soundboard - Script Kitties" />;
}

export default IndexPage;
