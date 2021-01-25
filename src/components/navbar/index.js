import React from "react"

import PageLinks from "../constants/links"
import Logo from "./navLogo"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.menuContainer}>
        <PageLinks />
      </div>
    </nav>
  )
}

export default Navbar
