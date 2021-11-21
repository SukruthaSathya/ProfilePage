import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AppContext } from '../context'
import '../App.css'

function Login() {
    const navigate = useNavigate()
    const { username, setUsername } = useContext(AppContext)
    const handleLogout = (e) => {
        e.preventDefault()
        navigate('/logout')
    }
    const handleRegister = (e) => {
        e.preventDefault()
        navigate('/')
    }
    return (
        <div className="parentDiv">
            <div className="childDiv">
                <h1 className="welcome">Welcome!</h1>

                <input
                    value={username} onChange={(e) => setUsername(e.target.value)}
                    type="text" placeholder=" Username" />

                <input type="password" placeholder=" Password" />
                <div className="button">
                    <button onClick={handleLogout}>Login</button>
                    <p onClick={handleRegister} >New Here? Register Now!</p>
                </div>

            </div>
        </div>
    )
}

export default Login
