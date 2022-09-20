import React from "react";

function MyAccount({ setIsAuthenticated, setCurrentUser }) {

    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => {
              if (res.ok) {
                setCurrentUser(null)
                setIsAuthenticated(false)
              }
            })
      }

    return(
        <div>MyAccount
            <br/>
            <button onClick={handleLogout} >Logout</button>
        </div>
    )
}

export default MyAccount