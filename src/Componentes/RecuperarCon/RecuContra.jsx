import React, { useState } from "react";
import { Link } from "react-router-";
import "./RecuContra.css"; // Asegúrate de crear este archivo CSS en la misma carpeta que RecuContra.jsx

const RecuContra = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del correo electrónico para la recuperación de contraseña
        console.log(email);
        alert("Instrucciones de recuperación enviadas (esto es solo un ejemplo).");
    };

    return (
        <div className="recuContra-container">
            <form onSubmit={handleSubmit} className="recuContra-form">
                <h2>Recuperar Contraseña</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa tu correo electrónico"
                    required
                />
                <button type="submit">Enviar</button>
                <Link to="/">Retroceder</Link>
            </form>
        </div>
    );
};

export default RecuContra;
