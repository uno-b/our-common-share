import React from "react"
import BackgroundSlider from "gatsby-image-background-slider"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./slider.module.css"

const Slider = () => {
  const query = useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className={styles.container}>
        <BackgroundSlider query={query} />
      </div>
    </>
  )
}

export default Slider
