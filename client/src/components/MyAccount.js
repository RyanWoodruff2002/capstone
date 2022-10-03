import React, {useState} from "react";

function MyAccount({ currentUser, setIsAuthenticated, setCurrentUser }) {


  const handleLogout = () => {

    fetch('/logout', {method: "DELETE"})
    .then(res => {
      if (res.ok) {
        setCurrentUser(null)
        setIsAuthenticated(false)
      }
    })
  }

  const [emailToggle, setEmailToggle] = useState(true)

  function deleteAccount() {
    fetch(`/deactivate`, {
      method: 'DELETE'
    }).then(r=>r.json()).then(r=>console.log(r)).then(handleLogout())
  }

  const [emailEdit, setEmailEdit] = useState('')

  const editEmailData = {
    "email": emailEdit
  }

  function handleSubmitEmail(e) {
    e.preventDefault()
    
    fetch(`/update_email`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(editEmailData)
    })
    .then(r=>r.json())
    .then(userObj=> {
      console.log(userObj)
      setEmailToggle(emailToggle=>!emailToggle)
      setCurrentUser(userObj)
    })
  }
  
  return(
    <div className=" container mx-auto p-4 bg-white">
      <div className=" w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
        <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" >Hello {currentUser.first_name}</h3>
        <br/>
        <div>
          {emailToggle 
          ?
          <div >
            <>{currentUser.email} </> 
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setEmailToggle(emailToggle => !emailToggle)} >Edit</button>
          </div>
          : 
          <form onSubmit={handleSubmitEmail} >
            <input className="px-2 py-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" placeholder={currentUser.email} onChange={e => setEmailEdit(e.target.value)} ></input>
            <div className="inline-flex">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l" type="submit" >Submit</button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r" onClick={() => setEmailToggle(emailToggle => !emailToggle)} >Cancel</button>
            </div>
          </form>
          }
        </div>
        <br/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleLogout} >Logout</button>
        <br/>
        <br/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={deleteAccount} >Deactivate Account</button>
      </div>
    </div>

   )
}

export default MyAccount