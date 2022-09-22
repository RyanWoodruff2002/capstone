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
  console.log(emailToggle)

  
  return(
    <div>
      <h1>My Account</h1>
      <p>Hello {currentUser.first_name}</p>
      <div>
        {emailToggle 
        ?
        <div>
          <>{currentUser.email} </> 
          <button onClick={() => setEmailToggle(emailToggle => !emailToggle)} >Edit</button>
        </div>
        : 
        <div>
          <input placeholder={currentUser.email} ></input>
          <button onClick={() => setEmailToggle(emailToggle => !emailToggle)} >Cancel</button>
        </div>
        }
      </div>
      <button onClick={handleLogout} >Logout</button>
    </div>
   )
}

export default MyAccount