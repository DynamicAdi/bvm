import React from 'react'
import styles from '@/sass/global/Loading.module.scss'

function Loading() {
  return (
  <div className={styles.main}>
    <div className={styles.loader}></div>
  </div>
  )
}

export default Loading