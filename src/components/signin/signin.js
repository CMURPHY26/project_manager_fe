import React, {useState, useEffect} from 'react';
import '../signin/signin.css';

const Signin = (props) => {
    return (
        <div className='signin'>
            <header className="login-header">Log In</header>
            <form className="signin-form">
                <label>Email</label>
                <input type="email"/>
      
                <label>Password</label>
                <input type="password"/>

                <a href="#">Forgot your Password?</a>
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Signin;