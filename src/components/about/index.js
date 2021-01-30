import React from "react"

import img1 from "../../assets/logo2.png"
import img2 from "../../images/social-media.webp"
import img3 from "../../images/get-paid.webp"
import img4 from "../../images/nodes.webp"
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
            className={styles.logo}
            alt="Logo"
            data-sal="slide-right"
            data-sal-duration="700"
          />
          <div className={styles.info}>
            <h2
              data-sal="slide-left"
              data-sal-duration="700"
              data-sal-delay="200"
            >
              Introduction
            </h2>
            <p
              data-sal="slide-left"
              data-sal-duration="700"
              data-sal-delay="400"
            >
              Our Common Share™ OCS™, a revolutionary new system of social
              media, along with community managed governance, and a currency
              token for its market systems, built on Custom Blockchain
              technology.
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
              Why Create a New Social Space?
            </h2>
            <p
              data-sal="slide-left"
              data-sal-duration="700"
              data-sal-delay="400"
            >
              In recent months the world’s leading tech executives including Tim
              Cook and even Mark Zukerberg have publicly acknowledged the
              dysfunctional nature of 1st generation social platforms. Sean
              Parker, Facebook co-founder, now calls himself a social media
              “conscientious objector.” Former Facebook exec Chamath
              Palihapitiya went so far as to apologize for his part in creating
              “tools that are ripping apart the social fabric of how society
              works”. At Davos Georges Soros went beyond the “addiction”
              critique of psychologists, public health and youth workers and
              political science researchers to say that the giants of social
              “are inducing people to give up their autonomy…
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
              Get Paid To Use OCS™ Social Exchange™
            </h2>
            <p
              data-sal="slide-left"
              data-sal-duration="700"
              data-sal-delay="400"
            >
              OCS™ offers a system that at its core is about sharing with its
              community. Our Common Share™ Social Exchange™ is about freedom of
              expression, artistic expression, and free speech, with real
              people. Content drives social media, OCS™ recognizes the value of
              user driven content, and we want to reward you for it. So we want
              to set aside a % of OCS™ profits into the OCS™ member share, a
              community owned, and governed fund.
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
            src={img4}
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
              Have you noticed how toxic some social media has become?
            </h2>
            <p
              data-sal="slide-left"
              data-sal-duration="700"
              data-sal-delay="400"
            >
              Our Common Share™ Ethos will be derived from a mix of internet
              charters, as well as the Canadian Charter of Rights and Freedoms,
              the American Bill of Rights, and the Universal Declaration of
              Human Rights (UDHR). This will put the power of community control
              back into the systems we use daily. Whether it's creating, coding,
              writing, sharing, or remembering, OCS™ users will have a say in
              the creation and management of these ethos.
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
