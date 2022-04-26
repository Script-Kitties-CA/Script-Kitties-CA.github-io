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
      cat_4: file(relativePath: { eq: "members/cat_4.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <>
      <div className="flex flex-wrap justify-evenly w-full mb-8">
        <Member name="James Lowther" alias="Articuler" url="https://jameslowther.com/" image={data.cat_3} />
        <Member name="Emily Baird" alias="Analytical Engine" url="https://ebaird.ca/" image={data.cat} />
        <Member name="Alexandra Tenney" alias="alexxxii" image={data.cat_2} />
        <Member name="Braydon Willms" alias="st8" image={data.cat_4} />

      </div>
    </>
  );
};

export default Members;
