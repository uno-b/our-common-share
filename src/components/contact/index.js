import React from "react"
import styles from "./contact.module.css"
import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa"

const Contact = () => {
  return (
    <>
      <div id="contact" />
      <div className={styles.shapeTop} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div data-sal="slide-up" data-sal-duration="700">
            <h1 className={styles.sectionTitle}>Contact Us</h1>
            <div className={styles.underline} />
            <p data-sal="slide-up" data-sal-duration="700" data-sal-delay="500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              laboriosam eum quibusdam?
            </p>
          </div>
          <div
            className={styles.socialLinks}
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="1000"
          >
            <button aria-label="Discord">
              <FaDiscord className={styles.icon} />
            </button>
            <button aria-label="Twitter">
              <FaTwitter className={styles.icon} />
            </button>
            <button aria-label="Instagram">
              <FaInstagram className={styles.icon} />
            </button>
            <button aria-label="Telegram">
              <FaTelegramPlane className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
