import React, { useState } from 'react';
import Botao from "./Botao"

const Centimetros = () => {
    const [valor1, setValor1] = useState('');

    return (
        <div>
            <h1>Exercício 9</h1>
            <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Metros' />
            <Botao aoClicar={() => alert(Number(valor1) * 100 + " Cm")} texto="Transformar"/>
        </div>
    )
}

export default Centimetros;