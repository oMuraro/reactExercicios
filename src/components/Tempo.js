import React, { useState } from 'react';
import Botao from "./Botao"

const Tempo = () => {
    const [valor1, setValor1] = useState('');

    function calcularTempo(){
        const horas = Number(valor1) * 24;
        const minutos = horas * 60;
        const segundos = minutos * 60;

        alert(horas + " Horas, " + minutos + " Minutos, " + segundos + " Segundos")
    }

    return (
        <div>
            <h1>Exercício 15</h1>
            <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Dias' />
            <Botao aoClicar={calcularTempo} texto="Tempo"/>
        </div>
    )
}

export default Tempo;