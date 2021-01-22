import React from "react"

import StarrySky from "./starrySky"
import Logo from "./coverLogo"
import Particles from "./particles"
import Title from "./title"
import Button from "./button"
import styles from "./cover.module.css"

export default () => {
  return (
    <div className={styles.cover}>
      {/* Starry Sky, Logo and Particles can be added*/}
      <Title />
      <Button />
    </div>
  )
}
