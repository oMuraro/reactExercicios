import React, { useState } from 'react';
import Botao from "./Botao"

const Farenheit = () => {
    const [valor1, setValor1] = useState('');

    return (
        <div>
            <h1>Exercício 2</h1>
            <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Celsius' />
            <Botao aoClicar={() => alert(Number(valor1) * 1.8 + 32) + "ºF"} texto="Transformar"/>
        </div>
    )
}

export default Farenheit;