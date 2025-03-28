import React, { useState } from 'react';
import Botao from "./Botao"

const IMC = () => {
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');

    return (
        <div>
            <h1>Exercício 11</h1>
            <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Peso em KG' />
            <input type="number" value={valor2} onChange={(e) => setValor2(e.target.value)} placeholder='Altura' />
            <Botao aoClicar={() => alert(Number(valor1) / Number(valor2) ** 2)} texto="Calcular"/>
        </div>
    )
}

export default IMC;