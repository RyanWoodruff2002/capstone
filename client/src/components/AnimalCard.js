import React from "react";

function AnimalCard({ animal }) {

    console.log(animal)

    const threats = animal.assoc_threats

    const threatsMap = threats.map(threat => {
        return(<p>{threat}</p>)
    })

    return (
        <div>
            <img src={animal.imageLink} />
            <h1>{animal.common_name}</h1>
            <h3>{animal.scientific_name}</h3>
            <br/>
            <div>
                Threatened by:
                {threatsMap}
            </div>
        </div>
    )
}

export default AnimalCard