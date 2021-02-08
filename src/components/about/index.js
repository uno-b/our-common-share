import React from "react"
import Fade from "react-reveal/Fade"

import img1 from "../../assets/logo2.png"
import img2 from "../../images/social-media.webp"
import img3 from "../../images/get-paid.webp"
import img4 from "../../images/nodes.webp"
import styles from "./about.module.css"
import { navigate } from "gatsby"

const About = () => {
  return (
    <>
      <div id="about" />
      <div className={styles.container}>
        <Fade bottom duration={1000} distance="30px">
          <div>
            <h1 className={styles.sectionTitle}>About</h1>
            <div className={styles.underline}></div>
          </div>
        </Fade>
        <div className={styles.item}>
          <Fade left duration={1000} delay={600} distance="30px">
            <img src={img1} className={styles.logo} alt="Logo" />
          </Fade>
          <div className={styles.info}>
            <Fade right duration={1000} delay={600} distance="30px">
              <h2>Introduction</h2>
            </Fade>
            <Fade right duration={1000} delay={800} distance="30px">
              <p>
                Our Common Share™ OCS™, a revolutionary new system of social
                media, along with community managed governance, and a currency
                token for its market systems, built on Custom Blockchain
                technology.
              </p>
            </Fade>
            <Fade right duration={1000} delay={800} distance="30px">
              <button onClick={() => navigate("/intro")}>Continue</button>
            </Fade>
          </div>
        </div>
        <div className={styles.item}>
          <Fade left duration={1000} delay={600} distance="30px">
            <img src={img2} alt="Logo" />
          </Fade>
          <div className={styles.info}>
            <Fade right duration={1000} delay={600} distance="30px">
              <h2>Why Create a New Social Space?</h2>
            </Fade>
            <Fade right duration={1000} delay={800} distance="30px">
              <p>
                In recent months the world’s leading tech executives including
                Tim Cook and even Mark Zukerberg have publicly acknowledged the
                dysfunctional nature of 1st generation social platforms. Sean
                Parker, Facebook co-founder, now calls himself a social media
                “conscientious objector.” Former Facebook exec Chamath
                Palihapitiya went so far as to apologize for his part in
                creating “tools that are ripping apart the social fabric of how
                society works”. At Davos Georges Soros went beyond the
                “addiction” critique of psychologists, public health and youth
                workers and political science researchers to say that the giants
                of social “are inducing people to give up their autonomy…
              </p>
            </Fade>
            <Fade right duration={1000} delay={800} distance="30px">
              <button onClick={() => navigate("/socialSpace")}>Continue</button>
            </Fade>
          </div>
        </div>
        <div className={styles.item}>
          <Fade left duration={1000} delay={600} distance="30px">
            <img src={img3} alt="Logo" />
          </Fade>
          <div className={styles.info}>
            <Fade right duration={1000} delay={600} distance="30px">
              <h2>Get Paid To Use OCS™ Social Exchange™</h2>
            </Fade>
            <Fade right duration={1000} delay={800} distance="30px">
              <p>
                OCS™ offers a system that at its core is about sharing with its
                community. Our Common Share™ Social Exchange™ is about freedom
                of expression, artistic expression, and free speech, with real
                people. Content drives social media, OCS™ recognizes the value
                of user driven content, and we want to reward you for it. So we
                want to set aside a % of OCS™ profits into the OCS™ member
                share, a community owned, and governed fund.
              </p>
            </Fade>
            <Fade right duration={1000} delay={800} distance="30px">
              <button onClick={() => navigate("/socialExchange")}>
                Continue
              </button>
            </Fade>
          </div>
        </div>
        <div className={styles.item}>
          <Fade left duration={1000} delay={600} distance="30px">
            <img src={img4} alt="Logo" />
          </Fade>
          <div className={styles.info}>
            <Fade right duration={1000} delay={600} distance="30px">
              <h2>Have you noticed how toxic some social media has become?</h2>
            </Fade>
            <Fade right duration={1000} delay={800} distance="30px">
              <p>
                Our Common Share™ Ethos will be derived from a mix of internet
                charters, as well as the Canadian Charter of Rights and
                Freedoms, the American Bill of Rights, and the Universal
                Declaration of Human Rights (UDHR). This will put the power of
                community control back into the systems we use daily. Whether
                it's creating, coding, writing, sharing, or remembering, OCS™
                users will have a say in the creation and management of these
                ethos.
              </p>
            </Fade>
            <Fade right duration={1000} delay={800} distance="30px">
              <button onClick={() => navigate("/toxicity")}>Continue</button>
            </Fade>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
