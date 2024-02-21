import React from "react";
import "./css/Card.css"
import star from "/images/star.png"

export default function Card(props) {
  return (

    <div className="n-caard-container">
      <img src={`../images/${props.img}`} alt="" className="n-card-image" />

      <div className="n-card-star-stats">
        <img src={star} alt="" className="n-card-star-image" />
        <span>{props.rating}</span>
        <span className="n-gray">({props.reviewCount}) •</span>
        <span className="n-gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
        <p> <span className="n-bold">From ${props.price}</span> / person
        
        </p>
    </div>

  )

}