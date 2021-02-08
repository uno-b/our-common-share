import React from "react"

import img3 from "../../images/get-paid.webp"
import styles from "./socialExchangeInfo.module.css"

const SocialExchangeInfo = () => {
  return (
    <div className={styles.container}>
      <img src={img3} alt="Get Paid" />
      <div className={styles.info}>
        <div className={styles.textBlock}>
          <h1>Get Paid To Use OCS™ Social Exchange™</h1>
        </div>
        <div className={styles.textBlock}>
          <p>
            OCS™ offers a system that at its core is about sharing with its
            community. Our Common Share™ Social Exchange™ is about freedom of
            expression, artistic expression, and free speech, with real people.
            Content drives social media, OCS™ recognizes the value of user
            driven content, and we want to reward you for it. So we want to set
            aside a % of OCS™ profits into the OCS™ member share, a community
            owned, and governed fund.
          </p>
        </div>
        <div className={styles.textBlock}>
          <p>
            Our Company is creating these platforms to give all Our Common
            Share™ community members the tools they need to take back control of
            the internet and bring back the foundational belief system that gave
            birth to the internet. What our team is creating is the world's
            first democratic global village, one that its members will truly
            help dictate the direction of. As we know corporations control large
            blocks of different markets, so we propose that we build our own,
            starting with a revolutionary new social media network one that is
            positive, community driven, and creates consensus on issues needed
            to manage the platform, a true social exchange™.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SocialExchangeInfo
