import React from "react";

function MyAnimalCard({animal, currentUser}) {
    const allDonations = (animal.donations)

    const renderAllDonations = allDonations.map(donation => {
        return(<p class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">${donation.amount}</p>)
    })

    const renderMyDonations = allDonations.map(donation => {
        if (donation.user_id === currentUser.id) {
            return(<p class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">${donation.amount}</p>)
        }
    })


    return (
        <div class="border-solid border-2 border-blue-100 flex flex-col rounded overflow-hidden shadow-lg">
            <img class="w-full" alt="animal" src={animal.imageLink} />
            <div class="font-bold text-xl mb-2" >
                <h1 class="text-gray-700 text-base" >{animal.common_name}</h1>
            </div>
            <br/>
            <div>
                <p>My Donations:</p>
                {renderMyDonations}
            </div>
            <br/>
            <div>
                <p>All Donations:</p>
                {renderAllDonations}
            </div>
        </div>
    )
}

export default MyAnimalCard