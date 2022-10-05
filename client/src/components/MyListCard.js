import React from "react";

function MyListCard({game}) {



    return(
        <div className="border-solid border-2 border-blue-100 flex flex-col rounded overflow-hidden shadow-lg" >
            <img className="w-full" alt="thumbnail" src={game.thumbnail} />
            <div className="font-bold text-xl mb-2" >
                <h1 className="text-gray-700 text-base" >{game.title} </h1>
                <h3 className="text-gray-700 text-base" >{game.genre}</h3>
                <h3 className="text-gray-700 text-base" >{game.platform}</h3>
            </div>
            <p>{game.short_description}</p>
            <br/>
            <p>Published by: {game.publisher}</p>
            <p>Developed by: {game.developer}</p>
            <a className="text-purple-700" href={game.game_url} >Visit Games Page</a>
        </div>
    )
}

export default MyListCard