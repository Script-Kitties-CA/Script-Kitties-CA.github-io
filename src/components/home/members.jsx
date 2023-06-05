import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Member from "./member";

const Members = () => {
  const data = useStaticQuery(graphql`
    {
      alexandraTenney: file(relativePath: { eq: "members/alexandra-tenney.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      alexandraTenneyDark: file(relativePath: { eq: "members/alexandra-tenney-dark.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      anthonyLoria: file(relativePath: { eq: "members/anthony-loria.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      anthonyLoriaDark: file(relativePath: { eq: "members/anthony-loria-dark.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      emilyBaird: file(relativePath: { eq: "members/emily-baird.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      emilyBairdDark: file(relativePath: { eq: "members/emily-baird-dark.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }

      jamesLowther: file(relativePath: { eq: "members/james-lowther.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      jamesLowtherDark: file(relativePath: { eq: "members/james-lowther-dark.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      jeremyStuart: file(relativePath: { eq: "members/jeremy-stuart.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
      jeremyStuartDark: file(relativePath: { eq: "members/jeremy-stuart-dark.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <>
      <div className="flex flex-wrap justify-evenly w-full mb-8">
        <Member name="Alexandra Tenney" alias="alexxxii" image={data.alexandraTenney} imageDark={data.alexandraTenneyDark} />
        <Member name="Anthony Loria" alias="" url="https://anthonyloria.dev/" image={data.anthonyLoria} imageDark={data.anthonyLoriaDark} />
        <Member name="Emily Baird" alias="Analytical Engine" url="https://ebaird.ca/" image={data.emilyBaird} imageDark={data.emilyBairdDark} />
        <Member name="James Lowther" alias="Articuler" url="https://jameslowther.com/" image={data.jamesLowther} imageDark={data.jamesLowtherDark} />
        <Member name="Jeremy Stuart" alias="Mr.Wizard" image={data.jeremyStuart} imageDark={data.jeremyStuartDark} />
      </div>
    </>
  );
};

export default Members;
