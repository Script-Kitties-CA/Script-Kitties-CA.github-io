import React from "react";

const SiteMetadata = ({ title }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="Script Kitties CTF Team" />
      <link rel="canonical" href="https://www.scriptkitties.ca" />
      <html lang="en" />
    </>
  );
};

export default SiteMetadata;
