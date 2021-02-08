import React from "react"

import img2 from "../../images/social-media.webp"
import styles from "./socialSpaceInfo.module.css"

const SocialSpaceInfo = () => {
  return (
    <div className={styles.container}>
      <img src={img2} alt="Social Media" />
      <div className={styles.info}>
        <div className={styles.textBlock}>
          <h1>Why Create a New Social Space?</h1>
        </div>
        <div className={styles.textBlock}>
          <p>
            In recent months the world’s leading tech executives including Tim
            Cook and even Mark Zukerberg have publicly acknowledged the
            dysfunctional nature of 1st generation social platforms. Sean
            Parker, Facebook co-founder, now calls himself a social media
            “conscientious objector.” Former Facebook exec Chamath Palihapitiya
            went so far as to apologize for his part in creating “tools that are
            ripping apart the social fabric of how society works”. At Davos
            Georges Soros went beyond the “addiction” critique of psychologists,
            public health and youth workers and political science researchers to
            say that the giants of social “are inducing people to give up their
            autonomy…
          </p>
        </div>
        <div className={styles.textBlock}>
          <p>
            What surprises about these elite criticisms is how long they’ve
            taken to surface. Facebook’s genesis as a “hotness ranking” tool
            devised by college sophomores is legend. Less often discussed are
            the strategies employed to set its ruthless undergrad values in
            stone, with a commercialized “popularity” and “approval” system
            tweaked to maximize cognitive miscues, personality disorders and
            compulsive dopamine-driven behaviours, much like those that fuel
            casino gambling. Similarly Twitter morphed from an innocent and
            entertaining interpersonal “micro-blog” site into a vapid “tabloid
            headline” sensationalism feed, driven by celebrity-fuelled
            algorithms designed to maximize stickiness.
          </p>
        </div>
        <div className={styles.textBlock}>
          <p>
            Mark Zukerberg has promised to “fix Facebook” in 2018 with plans
            that include block chain. But “fixing” a psychologically
            exploitative and entirely non-transparent 1st generation platform to
            eliminate its destructive features may simply equal killing it.
            Eventually, a significant proportion of gen 1 social media users
            could come to realize that beyond being psychologically damaging,
            all that “time wasting” and “like” chasing is in fact …work. Content
            producing work, ad revenue generating work, uncompensated work – all
            entirely owned by and created for the ultimate benefit of others.
            Our Common Share™ “Social Exchange™ model has the potential to
            hasten that day.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SocialSpaceInfo
