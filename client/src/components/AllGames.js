import React from "react";
import GameCard from "./GameCard";

function AllGames({ currentUser, gameArray }) {

    const renderGames = gameArray.map(game => {
        return ( <GameCard key={game.id} currentUser={currentUser} game={game} /> )
    }) 

    return(
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5" >
            {renderGames}
        </div>
    )
}

export default AllGames