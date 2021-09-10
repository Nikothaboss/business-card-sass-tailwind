import style from "./card.module.scss";
import image from "../../img/Narkolai-min.jpg"

import React from 'react'

const Card = () => {
    return (
        <div className={style.card}>
            <img src={image} alt="cringe bildet av nikolai" />
            <div className={style.contactInfo}>
                <h1>Nikolai Reed-Larsen</h1>
                <p>Email: nreedlarsen@gmail.com</p>
                <p>Phone: 418 53 597</p>
            </div>
        </div>
    )
}

export default Card
