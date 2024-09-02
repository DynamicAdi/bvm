import React from 'react'
import styles from "@/sass/pages/Main.module.scss";


function Main() {
  return (
    <>
    <div className={styles.screen}>
      <h1><span>Welcome</span> to<br />BVM High School</h1>
      {/* <h2>Enter to <span className={styles.first}>Learn</span><span className={styles.third}>Adapt</span><span className={styles.second}>Explore</span></h2> */}
      <p>Education is the most powerful weapon which you can use to change the world</p>
      <div className={styles.button}>
        <button className={styles.newBtn}>Learn More</button>
        <button className={`${styles.newBtn} ${styles.outline}`}>Explore</button>
      </div>
    </div>
  </>
  )
}

export default Main