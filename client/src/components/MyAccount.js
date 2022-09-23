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
          <input placeholder={currentUserState.email} ></input>
          <button onClick={() => setEmailToggle(emailToggle => !emailToggle)} >Cancel</button>
        </div>
        }
      </div>
      <button onClick={handleLogout} >Logout</button>
    </div>
   )
}

export default MyAccount