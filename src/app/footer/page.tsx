'use client';

import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>

        {/* Who we serve */}
        <div className={styles.column}>
          <h3>Who we serve</h3>
          <ul>
            <li><Link href="https://www.resourcepro.com/carrier/">Insurance carriers</Link></li>
            <li><Link href="https://www.resourcepro.com/retail/">Retail agents & brokers</Link></li>
            <li><Link href="https://www.resourcepro.com/mga-wholesale/">Wholesalers & MGAs</Link></li>
          </ul>
        </div>

        {/* What we do */}
        <div className={styles.column}>
          <h3>What we do</h3>
          <ul>
            <li><Link href="https://www.resourcepro.com/what-we-do/transform-your-operations/">Transform your operations</Link></li>
            <li><Link href="https://www.resourcepro.com/what-we-do/extend-your-team/">Extend your team</Link></li>
            <li><Link href="https://www.resourcepro.com/what-we-do/optimize-your-systems-and-data/">Optimize your systems and data</Link></li>
            <li><Link href="https://www.resourcepro.com/what-we-do/improve-productivity/">Improve productivity</Link></li>
          </ul>
        </div>

        {/* What we think */}
        <div className={styles.column}>
          <h3>What we think</h3>
          <ul>
            <li><Link href="https://www.resourcepro.com/insights/">Insights</Link></li>
            <li><Link href="https://www.resourcepro.com/events/">Events</Link></li>
            <li><Link href="https://www.resourcepro.com/insurance-101/">Insurance 101</Link></li>
          </ul>
        </div>

        {/* Who we are */}
        <div className={styles.column}>
          <h3>Who we are</h3>
          <ul>
            <li><Link href="https://www.resourcepro.com/why-resource-pro/">Why ReSource Pro</Link></li>
            <li><Link href="https://www.resourcepro.com/our-experts/">Our experts</Link></li>
            <li><Link href="https://www.resourcepro.com/our-leadership/">Our leadership</Link></li>
            <li><Link href="https://www.resourcepro.com/careers/">Careers</Link></li>
            <li><Link href="https://www.resourcepro.com/newsroom/">Newsroom</Link></li>
            <li><Link href="https://www.resourcepro.com/security-excellence/">Security excellence</Link></li>
          </ul>
        </div>

        {/* Headquarters */}
        <div className={styles.column}>
          <h3>Headquarters</h3>
          <address>
            ReSource Pro LLC<br />
            60 East 42nd Street<br />
            Suite 1500<br />
            New York, NY 10165<br />
            1-888-577-7552
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p>&copy; 2025 ReSource Pro</p>
        <div className={styles.links}>
          <Link href="https://www.resourcepro.com/terms/">Terms</Link>
          <Link href="https://www.resourcepro.com/privacy-policy/">Privacy Policy</Link>
          <Link href="https://www.resourcepro.com/sitemap/">Sitemap</Link>
        </div>
        <div className={styles.socials}>
          <Link href="https://www.linkedin.com/company/resource-pro/"><i className="fab fa-linkedin"></i></Link>
          <Link href="https://www.youtube.com/@ResourcePro"><i className="fab fa-youtube"></i></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
