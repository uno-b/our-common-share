import React from "react"
import { motion } from "framer-motion"

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
      <h1>Our Common Share</h1>
      <p>The next generation social media platform</p>
    </motion.div>
  )
}
