"use client";

import { useState } from "react";
import styles from "./Navbar.module.scss";
import { FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="/image.png" alt="ResourcePro Logo" />
        <span>ReSourcePro</span>
      </div>

      {/* Hamburger (mobile only) */}
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links */}
      <ul
        className={`${styles.links} ${
          menuOpen ? styles.mobileMenuActive : ""
        }`}
      >
        <li><a href="https://www.resourcepro.com/carrier/">Carrier</a></li>
        <li><a href="https://www.resourcepro.com/retail/">Retail</a></li>
        <li><a href="https://www.resourcepro.com/mga-wholesale/">MGA/Wholesale</a></li>
        <li><a href="https://www.resourcepro.com/insights/">Insights</a></li>
        <li><a href="https://www.resourcepro.com/events/">Events</a></li>
        <li><a href="https://www.resourcepro.com/about-us/">About Us</a></li>
      </ul>

      {/* Actions */}
      <div className={styles.actions}>
        <a href="#" className={styles.signIn}>
          <FaUser /> Sign in
        </a>
        {/* <div className={styles.search}>
          <FaSearch />
          <input type="text" placeholder="Search" />
        </div> */}
      </div>
    </nav>
  );
}
