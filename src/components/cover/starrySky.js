import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StarrySky = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "starry-sky.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} alt="Starry sky" />
}

export default StarrySky
