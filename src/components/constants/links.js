import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import styles from "./links.module.css"

export default () => {
  return (
    <ul className={styles.menuList}>
      <li>
        <button className={styles.menuItem} onClick={() => scrollTo("#home")}>
          Home
        </button>
      </li>
      <li>
        <button className={styles.menuItem} onClick={() => scrollTo("#about")}>
          About
        </button>
      </li>
      <li>
        <button className={styles.menuItem} onClick={() => scrollTo("#faq")}>
          FAQ
        </button>
      </li>
      <li>
        <button
          className={styles.menuItem}
          onClick={() => scrollTo("#fundraising")}
        >
          Fundraising
        </button>
      </li>
      <li>
        <button
          className={styles.menuItem}
          onClick={() => scrollTo("#contact")}
        >
          Contact Us
        </button>
      </li>
    </ul>
  )
}
