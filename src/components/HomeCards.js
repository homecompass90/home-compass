import React from 'react'
import '../homecards.css'

function HomeCards({ image, description, title }) {
    return (
        <div>
            <div className="home__cards">
             <img src={image} alt="1" className="card__image" /> 
             <div className="carInfo">
            <h2 className="card__title">{title}</h2>
 
            <p className="card__description">{description}</p>
            
            </div>
            </div>
        </div>
    )
}

export default HomeCards
