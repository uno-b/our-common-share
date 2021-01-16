import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo2.png" }) {
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
        width: `150px`,
        zIndex: `0`,
      }}
    >
      <Img fluid={data.file.childImageSharp.fluid} alt="Logo" />
    </div>
  )
}

export default Logo
