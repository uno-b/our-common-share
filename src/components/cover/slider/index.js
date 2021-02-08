import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

import styles from "./slider.module.css"

const Slider = () => (
  <div className={styles.container}>
    <BackgroundSlider
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile(
            filter: { sourceInstanceName: { eq: "backgrounds" } }
          ) {
            nodes {
              relativePath
              childImageSharp {
                fluid(maxWidth: 1000, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
    />
  </div>
)

export default Slider
