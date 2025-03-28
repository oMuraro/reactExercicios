import React, { useState } from 'react';
import Botao from "./Botao"

const Elevado = () => {
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');

    return (
        <div>
            <h1>Exercício 8</h1>
            <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Base' />
            <input type="number" value={valor2} onChange={(e) => setValor2(e.target.value)} placeholder='Expoente' />
            <Botao aoClicar={() => alert(Number(valor1) ** Number(valor2))} texto="Elevar"/>
        </div>
    )
}

export default Elevado;