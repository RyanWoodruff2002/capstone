import React from "react";
import AnimalCard from "./AnimalCard";

function AllAnimals({ currentUser, animalArray }) {

    const renderAnimals = animalArray.map(animal => {
        return ( <AnimalCard currentUser={currentUser} animal={animal} /> )
    }) 

    return(
        <div>{renderAnimals}</div>
    )
}

export default AllAnimals