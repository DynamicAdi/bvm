import React from 'react'
import styles from "@/sass/pages/teachers.module.scss"
import { TeacherCard } from '@/components/common/Card'


export default function Teachers() {
  return (
    <div className={styles.main}>
    <div className={styles.wave}>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={styles.svg}>
    <path fill="#ff5500" fillOpacity="1" d="M0,256L48,250.7C96,245,192,235,288,197.3C384,160,480,96,576,80C672,64,768,96,864,122.7C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
  </svg>
</div>
    <div className={styles.upperSection}>
<h1 className={styles.title}>Teachers</h1>
    <p className={styles.desc}>We have highly educated teachers.</p>
        </div>
    <div className={styles.cards}>
    <TeacherCard img='https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNzkzMjI0OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080' title='Adarsh Pandit' description='lorem30'/>
   
    </div>
    </div>
  )
}
