import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo1.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        position: `fixed`,
        left: `50px`,
        top: `0`,
        width: `140px`,
        zIndex: `2`,
      }}
    >
      <Img fluid={data.file.childImageSharp.fluid} alt="Logo" />
    </div>
  )
}

export default Logo
