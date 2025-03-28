import React, { useState } from 'react';
import Botao from "./Botao"

const Celsius = () => {
    const [valor1, setValor1] = useState('');

    return (
        <div>
            <h1>Exercício 3</h1>
            <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Farenheit' />
            <Botao aoClicar={() => alert((Number(valor1)-32)/1.8) + "ºC"} texto="Celsius"/>
        </div>
    )
}

export default Celsius;