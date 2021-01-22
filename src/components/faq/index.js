import React from "react"
import styles from "./faq.module.css"
import { motion } from "framer-motion"

const SectionTwo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div data-sal="slide-up">
          <h1 className={styles.sectionTitle}>FAQ</h1>
          <div className={styles.underline}></div>
        </div>
        <ul
          className={styles.list}
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="1000"
        >
          <motion.li whileHover={{ scale: 1.05 }}>
            <h2>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              accusamus quidem saepe itaque asperiores quasi nulla incidunt
              ullam delectus libero ut nisi, autem eum iure nihil deserunt qui.
              Veritatis, consequatur.
            </p>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            <h2>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              accusamus quidem saepe itaque asperiores quasi nulla incidunt
              ullam delectus libero ut nisi, autem eum iure nihil deserunt qui.
              Veritatis, consequatur.
            </p>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            <h2>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              accusamus quidem saepe itaque asperiores quasi nulla incidunt
              ullam delectus libero ut nisi, autem eum iure nihil deserunt qui.
              Veritatis, consequatur.
            </p>
          </motion.li>
        </ul>
      </div>
    </div>
  )
}

export default SectionTwo