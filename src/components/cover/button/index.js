import React from "react"
import { FaArrowDown } from "react-icons/fa"
import styles from "./button.module.css"

const Button = () => {
  return (
    <button className={styles.button}>
      <FaArrowDown />
    </button>
  )
}

export default Button
