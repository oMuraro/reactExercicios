import React, { useState } from 'react';
import Botao from "./Botao"

const Milhas = () => {
    const [valor1, setValor1] = useState('');

    return (
        <div>
            <h1>Exercício 10</h1>
            <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Quilometros' />
            <Botao aoClicar={() => alert(Number(valor1) / 1.609 + " Milhas")} texto="Transformar"/>
        </div>
    )
}

export default Milhas;