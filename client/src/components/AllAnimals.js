import React from "react";
import AnimalCard from "./AnimalCard";

function AllAnimals({ animalArray }) {

    const renderAnimals = animalArray.map(animal => {
        return ( <AnimalCard animal={animal} /> )
    })

    return(
        <div>{renderAnimals}</div>
    )
}

export default AllAnimals