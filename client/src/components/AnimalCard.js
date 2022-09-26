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
        return(<p>{threat}</p>)
    })

    return (
        <div>
            <img alt="animal" src={animal.imageLink} />
            <h1>{animal.common_name}</h1>
            <h3>{animal.scientific_name}</h3>
            <br/>
            <div>
                Threatened by:
                {threatsMap}
            </div>
            <h3 onClick={toggleDonateForm} >Donate Here!</h3>
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