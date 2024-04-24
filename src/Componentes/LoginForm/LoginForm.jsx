import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./LoginForms.css";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Inicio de sesión exitoso:', data);
                // Aquí puedes redirigir al usuario o manejar el estado global del usuario
            } else {
                console.error('Error en el inicio de sesión:', data.message);
            }
        } catch (error) {
            console.error('Error al conectar con el servidor:', error);
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Inicio de Sesion</h1>
                <div className="input-box">
                    <FaUserAlt className="icon" />
                    <input
                        type="text"
                        placeholder="E-mail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <FaLock className="icon" />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleSubmit}>Ingresar</button><abbr title=""></abbr>
            </form>
        </div>
    );
};

export default LoginForm;
