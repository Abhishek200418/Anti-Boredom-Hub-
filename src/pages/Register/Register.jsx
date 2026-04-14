import React, { useState } from "react";
import { registerUser } from "../../Services/AuthService";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

function Register(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        registerUser({ username, password })
        .then(()=>{
            alert("Registered Successfully");
            navigate("/login");
        })
        .catch((err)=>console.log(err));
    };

    return(
        <div className="register-container">
            <form className="register-form" onSubmit={handleRegister}>
                <h2>Register</h2>

                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button type="submit">Register</button>

                <p className="register-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Register;