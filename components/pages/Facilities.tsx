import React from 'react'
import css from "@/sass/pages/Facilities.module.scss";
import { FacilitiesCard } from '../common/Card';


function Facilities() {
  return (
    <div className={css.main}>
        <div className={css.heading}>
            <h1>Why to <span>choose</span> us ?</h1>
            <p>We provide the best facilities for our students</p>
        </div>
        <div className={css.child}>
        <div className={css.aligner}>
        <FacilitiesCard />
   

        </div>

        </div>
    </div>
  )
}

export default Facilities