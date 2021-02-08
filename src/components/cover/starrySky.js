import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StarrySky = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "starry-sky.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        left: `0`,
        top: `0`,
        zIndex: `-1`,
      }}
      id="home"
    >
      <Img fluid={data.file.childImageSharp.fluid} alt="Starry Sky" />
    </div>
  )
}

export default StarrySky
