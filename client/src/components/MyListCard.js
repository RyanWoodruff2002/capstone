import React from "react";

function MyListCard({game, currentUser}) {
    console.log(currentUser)



    return(
        <div class="border-solid border-2 border-blue-100 flex flex-col rounded overflow-hidden shadow-lg" >
            <img class="w-full" alt="thumbnail" src={game.thumbnail} />
            <div class="font-bold text-xl mb-2" >
                <h1 class="text-gray-700 text-base" >{game.title} </h1>
                <h3 class="text-gray-700 text-base" >{game.genre}</h3>
                <h3 class="text-gray-700 text-base" >{game.platform}</h3>
            </div>
            <p>{game.short_description}</p>
            <br/>
            <p>Published by: {game.publisher}</p>
            <p>Developed by: {game.developer}</p>
            <a class="text-purple-700" href={game.game_url} >Visit Games Page</a>
        </div>
    )
}

export default MyListCard