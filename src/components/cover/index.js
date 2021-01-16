import React from "react"

import StarrySky from "./image"
import Particles from "./particles"
import Title from "./title"
import styles from "./cover.module.css"

export default () => {
  return (
    <div className={styles.cover}>
      <StarrySky />
      <Particles />
      <Title />
    </div>
  )
}
