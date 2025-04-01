import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/Home.js';
import Contato from './screens/Contato.js';
import Exercicios from './screens/Exercicios.js';
import NovoEquipamento from './screens/NovoEquipamento.js';
import Equipamentos from './screens/Equipamentos.js';
import ConsultarEquipamento from './screens/ConsultarEquipamento.js';
import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {

  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
            <Nav.Link as={Link} to="/exercicios">Exercicios</Nav.Link>
            <Nav.Link as={Link} to="/novo_equipamento">Novo Equipamento</Nav.Link>
            <Nav.Link as={Link} to="/equipamentos">Ver Equipamentos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className='mt-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/exercicios" element={<Exercicios />} />
          <Route path="/novo_equipamento" element={<NovoEquipamento />} />
          <Route path="/equipamentos" element={<Equipamentos />} />
          <Route path="/consultar_equipamento" element={<ConsultarEquipamento />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;