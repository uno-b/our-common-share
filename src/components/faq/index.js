import React from "react"
import { AnimateSharedLayout } from "framer-motion"

import Item from "./item"
import styles from "./faq.module.css"

const FAQ = () => {
  const faq1 = [
    "Q: Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus quidem saepe itaque asperiores quasi nulla incidunt ullam delectus libero ut nisi, autem eum iure nihil deserunt qui. Veritatis, consequatur.",
  ]
  const faq2 = [
    "Q: Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus quidem saepe itaque asperiores quasi nulla incidunt ullam delectus libero ut nisi, autem eum iure nihil deserunt qui. Veritatis, consequatur.",
  ]
  const faq3 = [
    "Q: Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus quidem saepe itaque asperiores quasi nulla incidunt ullam delectus libero ut nisi, autem eum iure nihil deserunt qui. Veritatis, consequatur.",
  ]

  return (
    <>
      <div className={styles.shapeTop} />
      <div id="faq" />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div data-sal="slide-up">
            <h1 className={styles.sectionTitle}>FAQ</h1>
            <div className={styles.underline}></div>
          </div>
          <AnimateSharedLayout>
            <ul layout className={styles.list}>
              <Item question={faq1[0]} answer={faq1[1]} />
              <Item question={faq2[0]} answer={faq2[1]} />
              <Item question={faq3[0]} answer={faq3[1]} />
            </ul>
          </AnimateSharedLayout>
        </div>
      </div>
      <div className={styles.shapeBottom} />
    </>
  )
}

export default FAQ
