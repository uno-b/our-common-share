import React from "react"
import { motion } from "framer-motion"

import img1 from "../../images/social-media.webp"
import img2 from "../../images/nodes.webp"
import img3 from "../../images/get-paid.webp"
import styles from "./about.module.css"

const About = () => {
  return (
    <>
      <div id="about" />
      <div className={styles.container}>
        <div data-sal="slide-up">
          <h1 className={styles.sectionTitle}>About</h1>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.item}>
          <img src={img1} alt="Social Media" />
          <div className={styles.info}>
            <h2>Why a new social space?</h2>
            <p>
              Some top founders of the first generational social media have
              admitted to their faults. People are giving up their autonomy.
              Both social media (Twitter, Facebook) do things to maximize
              "stickiness".
            </p>
            <button>Continue</button>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.info}>
            <h2>Tokenized Trust</h2>
            <p>
              The world’s first token-trust empowered Social Exchange™ -and an
              entirely new vision of the social Internet. Grow user base through
              extending a "Common Share" of token ownership. Users will have
              their own beautiful space with AI support. + copyright protection
              for user content.
            </p>
            <button>Continue</button>
          </div>
          <img src={img2} alt="Social Media" />
        </div>
        <div className={styles.item}>
          <img src={img3} alt="Social Media" />
          <div className={styles.info}>
            <h2>Respect and Empowerment</h2>
            <p>
              It will offer a better-designed and uncluttered space for users
              plus tools to help realize self-expression, communication and
              collaboration. Privacy invasion, data mining and ad push won’t be
              features + granular customizability, full user control over
              ad-push and data sharing plus user designated communities.
            </p>
            <button>Continue</button>
          </div>
        </div>
        <button className={styles.readMore}>Read more</button>
      </div>
    </>
  )
}

export default About
