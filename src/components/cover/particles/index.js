import React from "react"
import Particles from "react-particles-js"
import styles from "./particles.module.css"

const Background = () => {
  return (
    <div className={styles.container}>
      <Particles
        params={{
          particles: {
            line_linked: {},
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            move: {
              speed: 1,
              bounce: false,
            },
          },
        }}
      />
    </div>
  )
}

export default Background
