import React from "react"
import { FaArrowDown } from "react-icons/fa"
import scrollTo from "gatsby-plugin-smoothscroll"
import { motion } from "framer-motion"

import styles from "./button.module.css"

const Button = () => {
  return (
    <motion.button
      aria-label="Go to About section"
      animate={{ scale: 1.2, transition: { yoyo: Infinity } }}
      className={styles.button}
      onClick={() => scrollTo("#about")}
    >
      <FaArrowDown />
    </motion.button>
  )
}

export default Button
