import logo from './logo.svg';
import './App.css';
import Media from './components/Media.js';
import Farenheit from './components/Farenheit.js';
import Celsius from './components/Celsius.js';
import AreaRetangulo from './components/AreaRetangulo.js';
import RaioCirculo from './components/RaioCirculo.js';
import PerimetroRetangulo from './components/PerimetroRetangulo.js';
import PerimetroCirculo from './components/PerimetroCirculo.js';
import Elevado from './components/Elevado.js';
import Centimetros from './components/Centimetros.js';
import Milhas from './components/Milhas.js';
import IMC from './components/IMC.js';
import Desconto from './components/Desconto.js';
import JurosSimples from './components/JurosSimples.js';
import JurosCompostos from './components/JurosCompostos.js';
import Tempo from './components/Tempo.js';

function App() {
  // const [contador, setContador] = useState(0);

  // const [valor1, setValor1] = useState('');
  // const [valor2, setValor2] = useState('');

  // const clicarBotao1 = () => {
  //   setContador(contador + 1);
  // }

  // const clicarBotao2 = () => {
  //   alert(Number(valor1) + Number(valor2))
  // }


  return (
    // <div>
    //   <h1>Hello World</h1>
    //   <p>Contador: {contador}</p>
    //   <Botao aoClicar={clicarBotao1} texto="Botão 1" />
    //   <Botao aoClicar={clicarBotao2} texto="Botão 2" />
    //   <hr />
    //   <input type="text" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Valor 1' />
    //   <input type="text" value={valor2} onChange={(e) => setValor2(e.target.value)} placeholder='Valor 2' />
    // </div>

    //---------------
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

export default App;
