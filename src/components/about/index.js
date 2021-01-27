import React from "react"
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
        <div
          className={styles.item}
          data-sal="slide-up"
          data-sal-duration="700"
        >
          <img
            src={img1}
            alt="Social Media"
            data-sal="slide-right"
            data-sal-duration="700"
          />
          <div className={styles.info}>
            <h2
              data-sal="slide-left"
              data-sal-duration="700"
              data-sal-delay="200"
            >
              Why a new social space?
            </h2>
            <p
              data-sal="slide-left"
              data-sal-duration="700"
              data-sal-delay="400"
            >
              Some top founders of the first generational social media have
              admitted to their faults. People are giving up their autonomy.
              Both social media (Twitter, Facebook) do things to maximize
              "stickiness".
            </p>
            <button>Continue</button>
          </div>
        </div>
        <div
          className={styles.item}
          data-sal="slide-up"
          data-sal-duration="700"
        >
          <img
            src={img2}
            alt="Social Media"
            data-sal="slide-right"
            data-sal-duration="700"
          />
          <div className={styles.info}>
            <h2
              data-sal="slide-left"
              data-sal-duration="700"
              data-sal-delay="200"
            >
              Tokenized Trust
            </h2>
            <p
              data-sal="slide-left"
              data-sal-duration="700"
              data-sal-delay="400"
            >
              The world’s first token-trust empowered Social Exchange™ -and an
              entirely new vision of the social Internet. Grow user base through
              extending a "Common Share" of token ownership. Users will have
              their own beautiful space with AI support. + copyright protection
              for user content.
            </p>
            <button>Continue</button>
          </div>
        </div>
        <div
          className={styles.item}
          data-sal="slide-up"
          data-sal-duration="700"
        >
          <img
            src={img3}
            alt="Social Media"
            data-sal="slide-right"
            data-sal-duration="700"
          />
          <div className={styles.info}>
            <h2
              data-sal="slide-left"
              data-sal-duration="700"
              data-sal-delay="200"
            >
              Respect and Empowerment
            </h2>
            <p
              data-sal="slide-left"
              data-sal-duration="700"
              data-sal-delay="400"
            >
              It will offer a better-designed and uncluttered space for users
              plus tools to help realize self-expression, communication and
              collaboration. Privacy invasion, data mining and ad push won’t be
              features + granular customizability, full user control over
              ad-push and data sharing plus user designated communities.
            </p>
            <button>Continue</button>
          </div>
        </div>
        <button
          className={styles.readMore}
          data-sal="slide-right"
          data-sal-duration="700"
        >
          Read more
        </button>
      </div>
    </>
  )
}

export default About
