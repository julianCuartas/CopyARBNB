import React from "react";
import logoAir from "/images/airbnb-logo.png"
import "./css/Header.css"
export default function Header() {


    return (

        <header className="n-Header">
<img src={logoAir} alt="Airbnb-logo" className="n-Header-img"/>
        </header>
    )



}