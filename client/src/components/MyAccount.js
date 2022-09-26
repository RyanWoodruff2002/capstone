import React, {useState, useEffect} from "react";

function MyAccount({ setIsAuthenticated, setCurrentUser }) {

  const [currentUserState, setCurrentUserState] = useState({})

  useEffect(() => {
    fetch('/me')
    .then(res=> res.json())
    .then(user => setCurrentUserState(user))
  }, [])
  console.log(currentUserState)


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
    fetch(`/deactivate/${currentUserState.id}`, {
      method: 'DELETE'
    }).then(r=>r.json()).then(r=>console.log(r)).then(handleLogout())
  }

  const [emailEdit, setEmailEdit] = useState('')
  console.log(emailEdit)

  const editEmailData = {
    "email": emailEdit
  }

  function handleSubmitEmail() {
    fetch('/updateEmail', {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(editEmailData)
    })
    .then(r=>r.json()).then(r=>console.log(r))
  }
  
  return(
    <div>
      <h1>My Account</h1>
      <p>Hello {currentUserState.first_name}</p>
      <div>
        {emailToggle 
        ?
        <div>
          <>{currentUserState.email} </> 
          <button onClick={() => setEmailToggle(emailToggle => !emailToggle)} >Edit</button>
        </div>
        : 
        <div>
          <input placeholder={currentUserState.email} onChange={e => setEmailEdit(e.target.value)} ></input>
          <button onClick={handleSubmitEmail} >Submit</button>
          <button onClick={() => setEmailToggle(emailToggle => !emailToggle)} >Cancel</button>
        </div>
        }
      </div>
      <br/>
      <button onClick={handleLogout} >Logout</button>
      <br/>
      <br/>
      <button onClick={deleteAccount} >Deactivate Account</button>
    </div>
   )
}

export default MyAccount