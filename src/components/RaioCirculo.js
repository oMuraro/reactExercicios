import React, { useState } from 'react';
import Botao from "./Botao"

const RaioCirculo = () => {
    const [valor1, setValor1] = useState('');

    return (
        <div>
            <h1>Exercício 5</h1>
            <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Circunferencia' />
            <Botao aoClicar={() => alert(Number(valor1) / (2 * 3.14))} texto="Raio"/>
        </div>
    )
}

export default RaioCirculo;