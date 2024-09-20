// src/Header.jsx
import React, { useState } from 'react';
import viteLogo from './images/vite.svg';
import reactLogo from './images/react.svg';
import './Header.css';

const Header = () => {
    const [viteRotateY, setViteRotateY] = useState(false);
    const [viteRotateX, setViteRotateX] = useState(false);
    const [reactRotateY, setReactRotateY] = useState(false);
    const [reactRotateX, setReactRotateX] = useState(false);

    // Funciones para girar el logo de Vite
    const toggleViteRotateY = () => {
        setViteRotateY(!viteRotateY);
        if (viteRotateX) {
            setViteRotateX(false); // Detener rotación en X si está activa
        }
    };

    const toggleViteRotateX = () => {
        setViteRotateX(!viteRotateX);
        if (viteRotateY) {
            setViteRotateY(false); // Detener rotación en Y si está activa
        }
    };

    const stopViteRotation = () => {
        setViteRotateY(false);
        setViteRotateX(false);
    };

    // Funciones para girar el logo de React
    const toggleReactRotateY = () => {
        setReactRotateY(!reactRotateY);
        if (reactRotateX) {
            setReactRotateX(false); // Detener rotación en X si está activa
        }
    };

    const toggleReactRotateX = () => {
        setReactRotateX(!reactRotateX);
        if (reactRotateY) {
            setReactRotateY(false); // Detener rotación en Y si está activa
        }
    };

    const stopReactRotation = () => {
        setReactRotateY(false);
        setReactRotateX(false);
    };

    return (
        <div>
            <header className="header">
                <img 
                    src={viteLogo} 
                    alt="Vite Logo" 
                    className={`logo vite-logo ${viteRotateY ? 'rotate-y' : ''} ${viteRotateX ? 'rotate-x' : ''}`} 
                />
                <h1 className="title">Curso de ReactJS</h1>
                <img 
                    src={reactLogo} 
                    alt="React Logo" 
                    className={`logo react-logo ${reactRotateY ? 'rotate-y' : ''} ${reactRotateX ? 'rotate-x' : ''}`} 
                />
            </header>
            <div className="button-container">
                {/* Botones para el logo de Vite */}
                <button onClick={toggleViteRotateY}>Girar Vite Y</button>
                <button onClick={toggleViteRotateX}>Girar Vite X</button>
                <button onClick={stopViteRotation}>Parar Vite</button>

                {/* Botones para el logo de React */}
                <button onClick={toggleReactRotateY}>Girar React Y</button>
                <button onClick={toggleReactRotateX}>Girar React X</button>
                <button onClick={stopReactRotation}>Parar React</button>
            </div>
        </div>
    );
};

export default Header;