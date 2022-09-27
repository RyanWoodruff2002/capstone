import React from "react";
import AnimalCard from "./AnimalCard";

function AllAnimals({ currentUser, animalArray }) {

    const renderAnimals = animalArray.map(animal => {
        return ( <AnimalCard key={animal.id} currentUser={currentUser} animal={animal} /> )
    }) 

    return(
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5" >{renderAnimals}</div>
    )
}

export default AllAnimals