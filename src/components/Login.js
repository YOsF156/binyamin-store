import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../index.css"




function Login({ setIsLogged }) {






    const navigate = useNavigate()

    const [err, setErr] = useState("")
    const handleSubmit = async (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);

        const reqData = JSON.stringify({ email: formData.get("username"), password: formData.get("password") });
        try {

            const response = await fetch("http://localhost:3001/api/users/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: reqData,
            });
            if (!response.ok) {
                setErr("err-login")
                throw new Error(`HTTP error! status: ${response.statusText}`);
            }
            const data = await response.json();
            console.log("🚀 ~ file: Login.js ~ line 22 ~ handleSubmit ~  data", data)
            localStorage.atLogin = data.userToken;
            setIsLogged(localStorage.atLogin);

        } catch (e) {
            alert(e)
        }
    }


    return (
        <div className={`login-form ${err}`} >
            <form onSubmit={handleSubmit} id="login-form">
                <div className="login-header">
                    Login
                    <h3>enter your details</h3>
                </div>
                {/* <div className="div-form-input"> */}
                <label htmlFor="username">username</label>
                <input id="username" type="email" placeholder="enter username here" className="username-input login-form-input" name="username" required />

                <label htmlFor="password">password</label>
                <input type="password" placeholder="enter password here" className="password-input login-form-input" name="password" required />

                <input type="submit" className="btn submit-btn" value="login" />
            </form>
        </div>
    )
}

export default Login