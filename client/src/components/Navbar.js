import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return(
        <div className="Navbar" >
            <p className="Link" >
                <Link to="/allanimals">All Animals</Link>
            </p>
            <p className="Link" >
                <Link to="/myanimals">My Animals</Link>
            </p>
            <p className="Link" >
                <Link to="/myaccount">My Account</Link>
            </p>
            <p className="Link" >
                <Link to="/signup"></Link>
            </p>
            <p className="Link" >
                <Link to="/login"></Link>
            </p>
        </div>
    )
}

export default Navbar