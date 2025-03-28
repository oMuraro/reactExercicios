import React, { useState } from 'react';
import Botao from "./Botao"

const PerimetroRetangulo = () => {
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');

    return (
        <div>
            <h1>Exercício 6</h1>
            <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Largura' />
            <input type="number" value={valor2} onChange={(e) => setValor2(e.target.value)} placeholder='Altura' />
            <Botao aoClicar={() => alert(2 * (Number(valor1) + Number(valor2)))} texto="Perimetro"/>
        </div>
    )
}

export default PerimetroRetangulo;