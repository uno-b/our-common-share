import React from "react"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <button>
          <FaFacebookF />
        </button>
        <button>
          <FaTwitter />
        </button>
        <button>
          <FaInstagram />
        </button>
      </div>
      <h4>
        Copyright &copy; {new Date().getFullYear()}
        <span> UnoCloud</span> all rights reserved
      </h4>
    </footer>
  )
}

export default Footer
