import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Member from "./member";

const Members = () => {
  const data = useStaticQuery(graphql`
    {
      emily: file(relativePath: { eq: "members/emily.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      emilyDark: file(relativePath: { eq: "members/emily-dark.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      alex: file(relativePath: { eq: "members/alex.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      alexDark: file(relativePath: { eq: "members/alex-dark.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      james: file(relativePath: { eq: "members/james.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      jamesDark: file(relativePath: { eq: "members/james-dark.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      jeremy: file(relativePath: { eq: "members/jeremy.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      jeremyDark: file(relativePath: { eq: "members/jeremy-dark.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <>
      <div className="flex flex-wrap justify-evenly w-full mb-8">
        <Member name="James Lowther" alias="Articuler" url="https://jameslowther.com/" image={data.james} imageDark={data.jamesDark} />
        <Member name="Emily Baird" alias="Analytical Engine" url="https://ebaird.ca/" image={data.emily} imageDark={data.emilyDark} />
        <Member name="Alexandra Tenney" alias="alexxxii" image={data.alex} imageDark={data.alexDark} />
        <Member name="Jeremy Stuart" alias="Mr.Wizard" image={data.jeremy} imageDark={data.jeremyDark} />
      </div>
    </>
  );
};

export default Members;
