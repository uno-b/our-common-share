import React from "react"
import { Link } from "gatsby"
import styles from "./links.module.css"

const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About Us",
    url: "/",
  },
  {
    id: 3,
    text: "Menu Three",
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

export default ({ styleClass }) => {
  return <ul className={styles.menuList}>{tempLinks}</ul>
}
