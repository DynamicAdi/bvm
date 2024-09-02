import React from 'react'
import styles from '@/sass/pages/Background.module.scss';
import Image from 'next/image';
import phy from "@/assets/phy.png";
import girl from "@/assets/girl.png"
import { PiAppWindowDuotone, PiRobotDuotone, PiStudentDuotone, PiTrophyDuotone } from "react-icons/pi";

const Background = ({children}:{children: React.ReactNode}) => {
  return (
    <div className={styles.bg}>
    <div className={styles.spot}><Image src={phy.src} alt='Bio' objectFit='cover' fill/></div>
    <div className={`${styles.spot} ${styles.spot2}`}><Image src={girl.src} alt='Bio' objectFit='cover' fill/></div>
    <div className={styles.bubbles}>
    <div className={styles.section}>
      <PiStudentDuotone size={50} />
      <h2>1K+ students</h2>
    </div>
      </div>
    <div className={`${styles.bubbles} ${styles.bubbles2}`}>
    <div className={styles.section}>
      <PiAppWindowDuotone size={50} />
      <h2>Digital learning</h2>
    </div>
    
    </div>
    <div className={`${styles.bubbles} ${styles.bubbles3}`}>
    <div className={styles.section}>
      <PiTrophyDuotone size={50} />
      <h2>Top Ranked students</h2>
    </div>
    </div>
    <div className={`${styles.bubbles} ${styles.bubbles4}`}>
    <div className={styles.section}>
      <PiRobotDuotone size={50} />
      <h2>Robotics Lab's</h2>
    </div>
    </div>
    
        {children}
    </div>
  )
}

export default Background