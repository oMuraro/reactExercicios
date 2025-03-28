import React, { useState } from 'react';
import Botao from "./Botao"

const PerimetroCirculo = () => {
    const [valor1, setValor1] = useState('');

    return (
        <div>
            <h1>Exercício 7</h1>
            <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Raio' />
            <Botao aoClicar={() => alert(2 * 3.14 * Number(valor1))} texto="Perimetro"/>
        </div>
    )
}

export default PerimetroCirculo;