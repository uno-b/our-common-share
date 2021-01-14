import React from "react"
import logo from "../../assets/logo.png"
import PageLinks from "../constants/links"
import styles from "./header.module.css"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menuContainer}>
        <PageLinks />
      </div>
    </nav>
  )
}

export default Navbar
