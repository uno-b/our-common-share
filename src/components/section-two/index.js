import React from "react"
import styles from "./section-two.module.css"
import { motion } from "framer-motion"

const SectionTwo = () => {
  return (
    <div className={styles.container}>
      <div data-sal="slide-up">
        <h1 className={styles.sectionTitle}>Section Two</h1>
        <div className={styles.underline}></div>
      </div>
      <ul
        className={styles.list}
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="1000"
      >
        <motion.li whileHover={{ scale: 1.1 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus
          quidem saepe itaque asperiores quasi nulla incidunt ullam delectus
          libero ut nisi, autem eum iure nihil deserunt qui. Veritatis,
          consequatur.
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus
          quidem saepe itaque asperiores quasi nulla incidunt ullam delectus
          libero ut nisi, autem eum iure nihil deserunt qui. Veritatis,
          consequatur.
        </motion.li>
        <motion.li whileHover={{ scale: 1.1, duration: 1000 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus
          quidem saepe itaque asperiores quasi nulla incidunt ullam delectus
          libero ut nisi, autem eum iure nihil deserunt qui. Veritatis,
          consequatur.
        </motion.li>
      </ul>
    </div>
  )
}

export default SectionTwo
