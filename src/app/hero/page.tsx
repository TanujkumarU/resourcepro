"use client";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Welcome to ResourcePro</h1>
        <p>Your trusted platform for resources and productivity.</p>
        <button>Get Started</button>
      </div>
    </section>
  );
}
