import React, {useState} from "react";

function AnimalCard({ currentUser, animal }) {

    const [donateForm, setDonateForm] = useState(true)

    const toggleDonateForm = () => {
        setDonateForm(donateForm=> !donateForm)
    }

    const [donateAmount, setDonateAmount] = useState()

    function findOrCreate() {
        fetch('/animal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(animalData)
        })
        .then(res=> res.json())
        .then(res => createDonation(res.id))
    }

    function createDonation(id) {
        fetch('/donation', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'user_id': currentUser.id,
             'animal_id': id, 'amount': donateAmount})
        })
        .then(res=>res.json()).then(res=>console.log(res))
    }

    const animalData = {
        "common_name": animal.common_name,
        "video_url": animal.video_url,
        "imageLink": animal.imageLink,
        "assoc_threats": animal.assoc_threats
    }



    function handleSubmit(e) {
        e.preventDefault()
        findOrCreate()
        e.target.reset()
    }

    const threats = animal.assoc_threats

    const threatsMap = threats.map(threat => {
        return(<p class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{threat}</p>)
    })

    return (
        <div class="border-solid border-2 border-blue-100 flex flex-col rounded overflow-hidden shadow-lg" >
            <img class="w-full" alt="animal" src={animal.imageLink} />
            <div class="font-bold text-xl mb-2" >
                <h1 class="text-gray-700 text-base" >{animal.common_name}</h1>
                <h3 class="text-gray-700 text-base" >{animal.scientific_name}</h3>
            </div>
            <br/>
            <div >
                Threatened by:
                {threatsMap}
            </div>
            <h3 class="mt-auto" onClick={toggleDonateForm} >Donate Here!</h3>
            {donateForm ? null : 
            <form onSubmit={handleSubmit} >
                <input min="0" type="number" onChange={(e) => setDonateAmount(e.target.value)} placeholder="Input Amount Here" />
                <button>Submit</button>
            </form>
            }
        </div>
    )
}

export default AnimalCard