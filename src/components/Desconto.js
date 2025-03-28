import React, { useState } from 'react';
import Botao from "./Botao"

const IMC = () => {
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');

    return (
        <div>
            <h1>Exercício 12</h1>
            <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Preço' />
            <input type="number" value={valor2} onChange={(e) => setValor2(e.target.value)} placeholder='Desconto' />
            <Botao aoClicar={() => alert(Number(valor1) - ((Number(valor1) * Number(valor2)) / 100))} texto="Descontar"/>
        </div>
    )
}

export default IMC;