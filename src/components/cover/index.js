import React from "react"

import Title from "./title"
import Button from "./button"
import styles from "./cover.module.css"

export default () => {
  return (
    <div className={styles.cover}>
      <Title />
      <Button />
    </div>
  )
}
