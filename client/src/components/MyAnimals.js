import React, {useState, useEffect} from "react";
import MyAnimalCard from "./MyAnimalCard";

function MyAnimals({currentUser}) {

    const [animalArray, setAnimalArray] = useState([])
    console.log(animalArray)

    useEffect(() => {
        fetch(`my_animals/${currentUser.id}`)
        .then(r=>r.json())
        .then(data=>setAnimalArray(data))
    }, [])

    const renderAnimals = animalArray.map(animal => {
        return ( <MyAnimalCard  currentUser={currentUser} animal={animal} /> )
    }) 

    return(
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {renderAnimals}
        </div>
    )
}

export default MyAnimals