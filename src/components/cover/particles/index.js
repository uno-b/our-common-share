import React from "react"
import Particles from "react-particles-js"

import styles from "./particles.module.css"

export default () => (
  <div className={styles.particlesContainer}>
    <Particles
      className={styles.particles}
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 2,
          },
          color: {
            value: "#ffffff",
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: false,
            },
          },
          line_linked: {
            color: "#ffffff",
            distance: 200,
          },
          move: {
            speed: 0.5,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  </div>
)
