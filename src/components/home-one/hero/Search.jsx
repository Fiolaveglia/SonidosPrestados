import React, { useState } from "react";


const Buscador = () => {
    const [instrumento, setInstrumento] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaEntrega, setFechaEntrega] = useState("");

    const handleSearch = () => {
        // Lógica para manejar la búsqueda
        console.log("Buscar:", { instrumento, fechaInicio, fechaEntrega });
    };

    return (
        <div className="buscador-container">
            <select
                value={instrumento}
                onChange={(e) => setInstrumento(e.target.value)}
                className="buscador-select"
            >
                <option value="">Instrumento</option>
                <option value="guitarra">Guitarra</option>
                <option value="piano">Piano</option>
                <option value="violin">Violín</option>
                <option value="violin">Saxo</option>
                <option value="violin">Batería</option>
                <option value="violin">Acordeón</option>

                {/* Añadir más opciones según sea necesario */}
            </select>

            <input
                type="date"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
                className="buscador-input"
            />

            <input
                type="date"
                value={fechaEntrega}
                onChange={(e) => setFechaEntrega(e.target.value)}
                className="buscador-input"
            />

            <button onClick={handleSearch} className="buscador-button aximo-default-btn aximo-header-btn">
                Buscar
            </button>
        </div>
    );
};

export default Buscador;
