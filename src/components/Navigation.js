import React, {useState, useEffect} from 'react';



const Navigation = (props) => {

    return (
        <nav>
            <div className="top-nav nav">
                <ul>
                    <li><img src="https://img.icons8.com/nolan/64/project-management.png"/></li>
                    <li>Projects</li>
                    <li>Calendar</li>
                </ul>
            </div>
            <div className="bottom-nav nav">
                <ul>
                    <li>Account</li>
                    <li><img src="https://img.icons8.com/nolan/64/login-rounded-right.png"/></li>
                </ul>
            </div>
        </nav>
    )

}

export default Navigation;