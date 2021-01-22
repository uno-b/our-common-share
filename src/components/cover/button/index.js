import React from "react"
import { FaArrowDown } from "react-icons/fa"
import scrollTo from "gatsby-plugin-smoothscroll"

import styles from "./button.module.css"

const Button = () => {
  return (
    <button className={styles.button} onClick={() => scrollTo("#about")}>
      <FaArrowDown />
    </button>
  )
}

export default Button
