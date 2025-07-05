"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { navigationLinks, companyInfo } from "../../data/data"
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navBrand}>
          <Link to="/" className={styles.logo}>
            <span> <img src={ companyInfo.logo } ></img> </span>
          </Link>
        </div>

        <div className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}>
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ""}`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
