import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/Home.js';
import Exercicios from './screens/Exercicios.js';
import NovoEquipamento from './screens/NovoEquipamento.js';
import Equipamentos from './screens/Equipamentos.js';
import ConsultarEquipamento from './screens/ConsultarEquipamento.js';
import NovoServico from './screens/NovoServico.js';
import Servicos from './screens/Servicos.js';
import ConsultarServico from './screens/ConsultarServico.js';
import NovoTecnico from './screens/NovoTecnico.js';
import Tecnicos from './screens/Tecnicos.js';
import ConsultarTecnico from './screens/ConsultarTecnico.js';
import NovoManutencao from './screens/NovoManutencao.js';
import Manutencoes from './screens/Manutencoes.js';
import ConsultarManutencao from './screens/ConsultarManutencao.js';
import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {

  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/exercicios">Exercicios</Nav.Link>
            <Nav.Link as={Link} to="/novo_equipamento">Novo Equipamento</Nav.Link>
            <Nav.Link as={Link} to="/equipamentos">Ver Equipamentos</Nav.Link>
            <Nav.Link as={Link} to="/novo_servico">Novo Serviço</Nav.Link>
            <Nav.Link as={Link} to="/servicos">Serviços</Nav.Link>
            <Nav.Link as={Link} to="/novo_tecnico">Novo Tecnico</Nav.Link>
            <Nav.Link as={Link} to="/tecnicos">Tecnicos</Nav.Link>
            <Nav.Link as={Link} to="/novo_manutencao">Nova Manutenção</Nav.Link>
            <Nav.Link as={Link} to="/manutencoes">Manutenções</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

      <Container className='mt-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercicios" element={<Exercicios />} />
          <Route path="/novo_equipamento" element={<NovoEquipamento />} />
          <Route path="/equipamentos" element={<Equipamentos />} />
          <Route path="/consultar_equipamento" element={<ConsultarEquipamento />} />
          <Route path="/novo_servico" element={<NovoServico />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/consultar_servico" element={<ConsultarServico />} />
          <Route path="/novo_tecnico" element={<NovoTecnico />} />
          <Route path="/tecnicos" element={<Tecnicos />} />
          <Route path="/consultar_tecnico" element={<ConsultarTecnico />} />
          <Route path="/novo_manutencao" element={<NovoManutencao />} />          
          <Route path="/manutencoes" element={<Manutencoes />} />          
          <Route path="/consultar_manutencao" element={<ConsultarManutencao />} />          
        </Routes>
      </Container>
    </Router>
  );
}

export default App;