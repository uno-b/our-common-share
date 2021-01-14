import React from "react"

import styles from "./cover.module.css"
import Particles from "./particles"
import Title from "./title"

export default () => {
  return (
    <div className={styles.cover}>
      <div className={styles.starrySky}></div>
      <div className={styles.earth}>
        <div></div>
      </div>
      <Particles />
      <Title />
    </div>
  )
}
