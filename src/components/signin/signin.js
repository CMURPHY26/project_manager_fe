import React, {useState, useEffect} from 'react';
import '../signin/signin.css';
import '../input/input'

// const Signin = (props) => {
//     return (
//         <div className='signin'>
//             <header className="login-header">Log In</header>
//             <form className="signin-form">
//                 <label>Email</label>
//                 <input type="email"/>
      
//                 <label>Password</label>
//                 <input type="password"/>

//                 <a href="#">Forgot your Password?</a>
//                 <button>Log In</button>
//             </form>
//         </div>
//     )
// }

function Signin(props) {
    const {item, toggleForm} = props
    const [input, setInput] = useState({
        email: item.email,
        password: item.password
    });
 
    const handleChange = (e) => {
        setInput({...input, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        // const listItem = {
        //     first_name: input.first_name,
        //     last_name: input.last_name,
        //     email: item.email
        // }
        props.handleSubmit(e, listItem);
        setInput({...input, email:"", password:""});
     }

    return (
        <div className="signin">
            <header className="login-header">Log In</header>       
            <form onSubmit={handleSubmit} className="signin-form">
                <Input
                    handleChange={handleChange}
                    name={"email"}
                    // placeholder={"List Item Title"}
                    type={"text"}
                    value={input.email}
                    id={"email"}
                />
                <Input
                    handleChange={handleChange}
                    name={"password"}
                    // placeholder={"List Item Description"}
                    type={"password"}
                    value={input.password}
                    id={"password"}
                />
                <a href="#">Forgot your Password?</a>
                <input
                    id="submit"
                    type="submit"
                    value={"Submit"}
                />
            </form>
        </div>
    )
}

export default Signin;