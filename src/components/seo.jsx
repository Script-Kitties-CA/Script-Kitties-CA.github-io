import React from "react";

const SiteMetadata = ({ title }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="CTF and Cybersecurity Enthusiasts" />
      <link rel="canonical" href="https://www.scriptkitties.ca" />
      <html lang="en" />
    </>
  );
};

export default SiteMetadata;
