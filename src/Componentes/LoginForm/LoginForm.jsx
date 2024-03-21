import React from "react";
import { useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "./LoginForms.css"



const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Acceder</h1>
                <div className="input-box">
                <FaUserAlt /> <input type="text" placeholder="Username" required />
                </div>

                <div className="input-box"> <FaLock />
               <input type="password" placeholder="Password" required />
                </div>

                <div className="remember-gorgot">
                    <label><input type="checkbox" />Recuerdame</label>
                </div>

                <button onclick="miFunc()" type="submit">Ingresar</button>

                <div className="register-link">
                    <p>¿ No Tienes una cuenta ? <a href="#">Registrarme</a></p>
                </div>

            </form>
        </div>
    );
};

export default LoginForm;