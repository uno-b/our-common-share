import React from "react"
import styles from "./contact.module.css"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <>
      <div id="contact" />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div data-sal="slide-up">
            <h1 className={styles.sectionTitle}>Contact Us</h1>
            <div className={styles.underline} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              laboriosam eum quibusdam? Eligendi, error quibusdam nesciunt
              blanditiis impedit facilis quae officiis doloribus ab suscipit
              perferendis earum repudiandae. Iusto, necessitatibus tempore.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
