import React from 'react';

function MiComponente({ color, fontSize }) {
    const estilo = {
        color: color,
        fontSize: fontSize,
    };

    return (
        <div style={estilo}>
            Este texto tiene un color y tamaño de fuente personalizados.
        </div>
    );
}

export default MiComponente;
