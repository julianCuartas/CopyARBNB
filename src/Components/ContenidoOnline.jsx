import React from "react";
import "./css/ContenidoOnline.css"
import photo from "../assets/images/photo-grid.png"


export default function ContenidoOnline (){

return(

<section className="n-contenido-section">

<img src={photo} alt="" className="n-Contenido-image"/>

<h1 className="n-Contenido-tittle">Online Experiences</h1>
<p className="n-Contenido-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
</section>


)




}