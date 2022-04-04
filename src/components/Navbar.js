import React from "react";
import Logo from "../images/Skully.png"

export default function Navbar() {
    return (
        <nav>
            <div className="nav--box">
                <img src={Logo} className='nav--logo1' alt="lil' skull"/>
                <h1 className="nav--title">30 Second RPG Book Reviews</h1>
                <img src={Logo} className='nav--logo2' alt="lil' skull" />
            </div>
        </nav>
        )
}