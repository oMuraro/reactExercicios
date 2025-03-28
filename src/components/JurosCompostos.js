import React, { useState } from 'react';
import Botao from "./Botao"

const JurosCompostos = () => {
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [valor3, setValor3] = useState('');

    return (
        <div>
            <h1>Exercício 14</h1>
            <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Capital' />
            <input type="number" value={valor2} onChange={(e) => setValor2(e.target.value)} placeholder='Taxa de Juros' />
            <input type="number" value={valor3} onChange={(e) => setValor3(e.target.value)} placeholder='Periodo' />
            <Botao aoClicar={() => alert(Number(valor1) * (1 + Number(valor2)) ** Number(valor3))} texto="Calcular"/>
        </div>
    )
}

export default JurosCompostos;