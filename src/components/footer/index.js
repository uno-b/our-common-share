import React from "react"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <h4>Copyright &copy; {new Date().getFullYear()} All Rights Reserved.</h4>
    </footer>
  )
}

export default Footer
