import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AppContext } from '../context'

function Logout() {
    const { username } = useContext(AppContext)
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <div className="parentDiv">
            <div className="childDiv">
                <h1 className="welcome">Welcome {username}!</h1>
                <h2>Successfully Logged in.</h2>
                <div className="button">
                    <button onClick={handleLogin}>Logout</button>
                </div>
            </div>

        </div>
    )
}

export default Logout
