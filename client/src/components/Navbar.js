import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return(
        <div class="flex items-center justify-center " >
            <a class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"  >
                <Link to="/allgames">All Games</Link>
            </a>
            <a class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"  >
                <Link to="/mylist">My List</Link>
            </a>
            <a class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300" >
                <Link to="/myaccount">My Account</Link>
            </a>
            <a class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300" >
                <Link to="/signup"></Link>
            </a>
            <a class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300" >
                <Link to="/login"></Link>
            </a>
        </div>
    )
}

export default Navbar