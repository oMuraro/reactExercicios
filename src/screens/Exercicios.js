import React from 'react';
import Media from '../components/Media.js';
import Farenheit from '../components/Farenheit.js';
import Celsius from '../components/Celsius.js';
import AreaRetangulo from '../components/AreaRetangulo.js';
import RaioCirculo from '../components/RaioCirculo.js';
import PerimetroRetangulo from '../components/PerimetroRetangulo.js';
import PerimetroCirculo from '../components/PerimetroCirculo.js';
import Elevado from '../components/Elevado.js';
import Centimetros from '../components/Centimetros.js';
import Milhas from '../components/Milhas.js';
import IMC from '../components/IMC.js';
import Desconto from '../components/Desconto.js';
import JurosSimples from '../components/JurosSimples.js';
import JurosCompostos from '../components/JurosCompostos.js';
import Tempo from '../components/Tempo.js';

const Exercicios = () => {
    return (
        <div>
            <Media />
            <hr />
            <Farenheit />
            <hr />
            <Celsius />
            <hr />
            <AreaRetangulo />
            <hr />
            <RaioCirculo />
            <hr />
            <PerimetroRetangulo />
            <hr />
            <PerimetroCirculo />
            <hr />
            <Elevado />
            <hr />
            <Centimetros />
            <hr />
            <Milhas />
            <hr />
            <IMC />
            <hr />
            <Desconto />
            <hr />
            <JurosSimples />
            <hr />
            <JurosCompostos />
            <hr />
            <Tempo />
        </div>
    );
}

export default Exercicios;