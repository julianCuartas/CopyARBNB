import React from "react";
import ContenidoOnline from "./ContenidoOnline";
import Card from "./Card";
import Data from "../assets/data"
import "./css/contenido.css"

export default function Main() {

    const data = Data.map(data => {

        return <Card
            key={data.id}
           {...data}


        />

    })
    return (

        <>
            <ContenidoOnline />

            <section className="n-section-cards">
                {data}
            </section>

        </>
    )

}