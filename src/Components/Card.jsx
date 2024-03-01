import React from "react";
import "./css/Card.css"
import star from "/images/star.png"

export default function Card(props) {

  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"

  } else if (props.location === "Online") {

    badgeText = "ONLINE"
  }

  return (

    <div className="n-caard-container">
      {badgeText && <div className="n-card-sold-out">{badgeText}</div>}
      <img src={`/images/${props.coverImg}`} alt="" className="n-card-image" />

      <div className="n-card-star-stats">
        <img src={star} alt="" className="n-card-star-image" />
        <span>{props.stats.rating}</span>
        <span className="n-gray">({props.stats.reviewCount}) •</span>
        <span className="n-gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p> <span className="n-bold">From ${props.price}</span> / person

      </p>
    </div>

  )

}