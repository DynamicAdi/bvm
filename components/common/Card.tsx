import React from 'react'
import styles from "@/sass/cards/Card.module.scss"
import css from "@/sass/pages/Facilities.module.scss";


export function TeacherCard({img, title, description}: {
  img: string,
  title: string,
  description: string,
}) {
  return (
    <>
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.content}>
       <div className={styles.tit}>
        <h1>{title}</h1>
       </div>
      <div className={styles.innerContent}>
        <p>{description}</p>
      </div>
      </div>
    </div>
    </>
  )
}


export function EventsCard() {
  return (
    <div className={styles.cards}>
    <div className={styles.image}>
      <img src="https://source.unsplash.com/a-basket-of-lilacs-sitting-on-a-wooden-dock-ASMVy5bpYoE" alt="pic" />
    </div>
    <div className={styles.content}>
    <h1>Vigyan mela</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt libero eveniet eum, et aliquid harum iure quam amet ullam accusantium sed quod est ab, excepturi natus quis, officia sint cumque!</p>
    <button className={styles.button}>know more</button>
    </div>
   </div>
  )
}

export function FacilitiesCard() {
  return (
    <div className={css.card}>
                <div className={css.image}>
                    <img src='https://source.unsplash.com/woman-placing-sticky-notes-on-wall-Oalh2MojUuk' alt='Facilities' />
                </div>
                <div className={css.content}>
                    <h1>Best Teachers</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt officia dicta perspiciatis nostrum nam ipsum nulla facilis, blanditiis quo</p>
                    <button>know more</button>
                </div>
            </div>

  )
}