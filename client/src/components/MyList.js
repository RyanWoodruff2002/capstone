import React, {useState, useEffect} from "react";
import MyListCard from "./MyListCard";

function MyList({currentUser}) {

    const [gameArray, setGameArray] = useState([])
    // console.log(gameArray)

    useEffect(() => {
        fetch(`my_games/${currentUser.id}`)
        .then(r=>r.json())
        // .then(data=>setAnimalArray(data))
        .then(data => setGameArray(data))
    }, [])


    const renderGames = gameArray.map(game => {
        return ( <MyListCard  currentUser={currentUser} game={game} /> )
    }) 

    return(
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {renderGames}
        </div>
    )
}

export default MyList