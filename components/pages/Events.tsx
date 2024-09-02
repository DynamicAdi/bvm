import React from 'react'
import styles from "@/sass/pages/Events.module.scss"
import { EventsCard } from '@/components/common/Card'


function Events() {
  return (
    <main className={styles.main}>
        <h1 className={styles.title}>Events</h1>
        <p className={styles.desc}>All of the events are gonna appear here</p>
        <div className={styles.child}>
          <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard />

        </div>
    </main>
  )
}

export default Events