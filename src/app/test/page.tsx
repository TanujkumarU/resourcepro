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
        <a href="https://resourceprob2cprd.b2clogin.com/resourceprob2cprd.onmicrosoft.com/b2c_1_rsp_client/oauth2/v2.0/authorize?client_id=af812df3-c4e2-4605-949a-5113dc14e061&scope=https%3A%2F%2FResourceProB2CPrd.onmicrosoft.com%2FAPI%2Faccess_as_user%20https%3A%2F%2FResourceProB2CPrd.onmicrosoft.com%2FAPI%2Fopenid%20https%3A%2F%2FResourceProB2CPrd.onmicrosoft.com%2FAPI%2Foffline_access%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fportal.resourcepro.com%2F&client-request-id=0198db67-cd8f-76d0-ae64-30647df25091&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=3.10.0&client_info=1&code_challenge=IO27vu88Vv64nOISXMVKlvllWCjDq2w-Ir3NujRq6mI&code_challenge_method=S256&prompt=login&nonce=0198db67-cd90-7dee-856e-928b0e284843&state=eyJpZCI6IjAxOThkYjY3LWNkOTAtNzk4Zi04NGMxLWU4ZGIxZTgzNGRlNSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D" className={styles.signIn}>
          <FaUser /> Sign in
        </a>
      </div>
    </nav>
  );
}
