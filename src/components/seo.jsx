import React from "react";

import { Helmet } from "react-helmet";

const SiteMetadata = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="Script Kitties CTF Team" />
      <link rel="canonical" href="https://www.scriptkitties.ca" />
      <html lang="en" />
    </Helmet>
  );
};

export default SiteMetadata;
