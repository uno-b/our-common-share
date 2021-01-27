import React from "react"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
