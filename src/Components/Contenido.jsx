import React from "react";
import ContenidoOnline from "./ContenidoOnline";
import katie from "katie-zaferes.png"
import Card from "./Card";

export default function Main() {


    return (

        <>
            {/*- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
    - price (136)*/}

            {/* <ContenidoOnline /> */}

            <Card img={katie}
                rating="5.0"
                reviewCount="6"
                country="USA"
                title="Life Lessons with Katie Zaferes" 
                price="136"
                />
        </>
    )

}