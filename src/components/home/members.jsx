import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Member from "./member";

const Members = () => {
  const data = useStaticQuery(graphql`
    {
      james_lowther: file(relativePath: { eq: "members/james-lowther.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      cat: file(relativePath: { eq: "members/cat.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      cat_2: file(relativePath: { eq: "members/cat_2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      cat_3: file(relativePath: { eq: "members/cat_3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <>
      <div className="flex flex-wrap justify-evenly w-full mb-20">
        <Member name="James Lowther" alias="Articuler" image={data.cat_3} />
        <Member name="Analytical Engine" image={data.cat} />
        <Member name="Alexandra Tenney" alias="alexxxii" image={data.cat_2} />
      </div>
    </>
  );
};

export default Members;
