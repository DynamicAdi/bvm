import React from 'react'
import styles from "@/sass/global/Footer.module.scss"
import Link from 'next/link'
export default function Footer() {
  return (
    <main className={styles.footer}>
      <svg className={styles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path fill='#f5f5f5' d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      
      <div className={styles.footerContent}>
        <div className={styles.logo}>
            <h1>BVM High School</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nulla minus molestiae non blanditiis harum perferendis corporis rem fugit exercitationem?</p>
        <div className={styles.touch}>
            <h1>Get in touch!</h1>
            <input type="email" placeholder='Enter your email' />
            <button>Sumbit</button>
        </div>
        </div>

        <div className={styles.quickLinks}>
            <h1>Quick Links</h1>
            <ul>
                <Link href={'/'}>
                <li>Home</li>
                </Link>
                <Link href={'/'}>
                <li>About</li>
                </Link>
                <Link href={'/'}>
                <li>Events</li>
                </Link>
                <Link href={'/'}>
                <li>Facilities</li>
                </Link>
                <Link href={'/'}>
                <li>Teachers</li>
                </Link>
            </ul>
        </div>

        <div className={styles.quickLinks}>
            <h1>Contacts</h1>
        <ul>
            <p>Address</p>
            <p>Email:</p>
            <p>Phone:</p>
            <p>Website:</p>
        </ul>
        </div>
      </div>
    </main>
  )
}
