import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return(
        <div className="flex items-center justify-center " >
                <Link className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300" to="/allgames">All Games</Link>
                <Link className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300" to="/mylist">My List</Link>
                <Link className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300" to="/myaccount">My Account</Link>
                <Link className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300" to="/signup"></Link>
                <Link className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300" to="/login"></Link>
        </div>
    )
}

export default Navbar