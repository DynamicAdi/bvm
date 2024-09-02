"use client"
import React, { useState } from 'react'
import styles from '@/sass/global/Navbar.module.scss';
import { inter, popins } from '@/assets/fonts';
import { MdOutlineSort, MdClose } from "react-icons/md";


function Navbar() {
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!open)
    }

  return (
<div className={`${styles.main} ${inter.className} ${popins.variable}`}>
        <div className={styles.menu} onClick={openMenu}>
            <MdOutlineSort className={`${open ? `${styles.closed}` : `${styles.open}`} ${styles.open}`} />
            <MdClose  className={`${!open ? `${styles.closed}` : `${styles.open}`} ${styles.open}`} />
        </div>
    <div className={styles.children}>
        <div className={styles.logo}>
            <a href="/">
                <h1>LOGO</h1>
                {/* <img src="" alt="BVM High School Ramban" /> */}
            </a>
        </div>
        <div className={styles.nav}>
            <ul className={`${open && styles.opened}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">about</a></li>
                <li><a href="/contact">Teachers</a></li>
                <li><a href="/contact">Student Info</a></li>
                <li><a href="/about">Rules</a></li>
                <li><a href="/about">Results</a></li>

            </ul>
        </div>
    </div>
</div>
  )
}

export default Navbar