import React, {useState} from "react";

function GameCard({ currentUser, game }) {

    // const [donateForm, setDonateForm] = useState(true)

    // const toggleDonateForm = () => {
    //     setDonateForm(donateForm=> !donateForm)
    // }

    // const [donateAmount, setDonateAmount] = useState()

    function findOrCreate() {
        fetch('/game', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gameData)
        })
        .then(res=> res.json())
        .then(res => createBookmark(res.id))
    }

    function createBookmark(id) {
        console.log(id)
        fetch('/bookmark', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'user_id': currentUser.id,
             'game_id': id})
        })
        .then(res=>res.json()).then(res=>console.log(res))
    }

    const gameData = {
        "title": game.title,
        "thumbnail": game.thumbnail,
        "short_description": game.short_description,
        "game_url": game.game_url,
        "genre": game.genre,
        "platform": game.platform,
        "publisher": game.publisher,
        "developer": game.developer
    }



    // function handleSubmit(e) {
    //     e.preventDefault()
    //     findOrCreate()
    //     e.target.reset()
    // }

    return (
        <div className="border-solid border-2 border-blue-100 flex flex-col rounded overflow-hidden shadow-lg" >
            <img className="w-full" alt="thumbnail" src={game.thumbnail} />
            <div className="font-bold text-xl mb-2" >
                <h1 className="text-gray-700 text-base" >{game.title} </h1>
                <h3 className="text-gray-700 text-base" >{game.genre}</h3>
                <h3 className="text-gray-700 text-base" >{game.platform}</h3>
            </div>
            <p>{game.short_description}</p>
            <button onClick={findOrCreate} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r">
                Add to My List
            </button>
            <br/>
            <p>Published by: {game.publisher}</p>
            <p>Developed by: {game.developer}</p>
            <a className="text-purple-700" href={game.game_url} >Visit Games Page</a>
        </div>
    )
}

export default GameCard