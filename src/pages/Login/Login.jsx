import React, { useState, useEffect } from "react";
import { loginUser } from "../../Services/AuthService";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // ✅ If already logged in → go home
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token){
            navigate("/");
        }
    },[]);

    const handleLogin = (e) => {
        e.preventDefault();

        loginUser({ username, password })
        .then((res) => {
            if(res.data !== "Invalid Credentials"){
                localStorage.setItem("token", res.data);
                navigate("/");
            } else {
                alert("Invalid Credentials");
            }
        })
        .catch((err) => console.log(err));
    };

    return(
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>

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

                <button type="submit">Login</button>

                <p className="login-link">
                    New user? <Link to="/register">Register here</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;