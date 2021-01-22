import React from "react"

import PageLinks from "../constants/links"
import Logo from "./navLogo"
import styles from "./header.module.css"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menuContainer}>
        <PageLinks />
      </div>
      <Logo />
    </nav>
  )
}

export default Navbar
