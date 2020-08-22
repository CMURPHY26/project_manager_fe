import React, {useState, useEffect} from 'react';



const Navigation = (props) => {

    return (
        <nav>
            <div className="top-nav nav">
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Calendar</li>
                </ul>
            </div>
            <div className="bottom-nav nav">
                <ul>
                    <li>Account</li>
                    <li>Sign-Up/Login</li>
                </ul>
            </div>
        </nav>
    )

}

export default Navigation;