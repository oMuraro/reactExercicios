import React, { useState } from 'react';
import Botao from "./Botao"

const AreaRetangulo = () => {
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');

    return (
        <div>
            <h1>Exercício 4</h1>
            <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Largura' />
            <input type="number" value={valor2} onChange={(e) => setValor2(e.target.value)} placeholder='Altura' />
            <Botao aoClicar={() => alert(Number(valor1) * Number(valor2))} texto="Area"/>
        </div>
    )
}

export default AreaRetangulo;