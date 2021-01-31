import React from "react"
import { motion } from "framer-motion"
import Fade from "react-reveal/Fade"

import styles from "./title.module.css"

const titleContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

export default () => {
  return (
    <motion.div
      className={styles.titleContainer}
      variants={titleContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <Fade bottom duration={1000} delay={600} distance="30px">
        <h1>Our Common Share</h1>
      </Fade>
      <Fade bottom duration={1000} delay={1000} distance="30px">
        <p>The next generation social media platform</p>
      </Fade>
    </motion.div>
  )
}
