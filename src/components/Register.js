import React from 'react';
import { useNavigate } from 'react-router';
import '../App.css';

function Register() {
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        navigate('/login')
    }
    return (
        <div className="parentDiv">
            <div className="childDiv">
                <h1>New Here?</h1>
                <h2>Register Now!</h2>
                <input type="text" placeholder="Enter Username" />
                <input type="email" placeholder="Enter Email Address" />
                <input type="text" placeholder="Moblie Number" />
                <input type="password" placeholder="Create Password" />
                <div className="button">
                    <button onClick={handleLogin}>Register</button>
                    <p onClick={handleLogin} >Login Here</p>
                </div>

            </div>
        </div>
    )
}

export default Register
