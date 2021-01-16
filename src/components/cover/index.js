import React from "react"

import StarrySky from "./starrySky"
import Logo from "./logo"
import Particles from "./particles"
import Title from "./title"
import styles from "./cover.module.css"

export default () => {
  return (
    <div className={styles.cover}>
      <StarrySky />
      <Logo />
      <Particles />
      <Title />
    </div>
  )
}
