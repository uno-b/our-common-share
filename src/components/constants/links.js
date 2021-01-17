import React from "react"
import { Link } from "gatsby"
import {
  FaHome,
  FaCheck,
  FaQuestion,
  FaPhone,
  FaDollarSign,
} from "react-icons/fa"
import styles from "./links.module.css"

const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "Problem",
    url: "/",
  },
  {
    id: 3,
    text: "FAQ",
    url: "/",
  },
  {
    id: 4,
    text: "Contact Us",
    url: "/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url} className={styles.menuItem}>
        {link.text}
      </Link>
    </li>
  )
})
{
  /*<ul className={styles.menuList}>{tempLinks}</ul>*/
}
export default ({ styleClass }) => {
  return (
    <ul className={styles.menuList}>
      <li>
        <button className={styles.menuItem}>
          <FaHome />
          Home
        </button>
      </li>
      <li>
        <button className={styles.menuItem}>
          <FaCheck />
          Solutions
        </button>
      </li>
      <li>
        <button className={styles.menuItem}>
          <FaQuestion />
          FAQ
        </button>
      </li>
      <li>
        <button className={styles.menuItem}>
          <FaDollarSign />
          Fundraising
        </button>
      </li>
      <li>
        <button className={styles.menuItem}>
          <FaPhone />
          Contact Us
        </button>
      </li>
    </ul>
  )
}
