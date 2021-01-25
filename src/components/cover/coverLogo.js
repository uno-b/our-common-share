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
        position: `absolute`,
        left: `0`,
        top: `0`,
        width: `500px`,
        zIndex: `100`,
      }}
    >
      <Img fluid={data.file.childImageSharp.fluid} alt="Logo" />
    </div>
  )
}

export default Logo
