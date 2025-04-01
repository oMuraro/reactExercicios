import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/Home.js';
import Contato from './screens/Contato.js';
import Exercicios from './screens/Exercicios.js';
import { Container, Nav } from 'react-bootstrap';

function App() {

  return (
    <Router>
      <Nav bg="primary" variant="dark" expand="lg">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
        <Nav.Link as={Link} to="/exercicios">Exercicios</Nav.Link>
      </Nav>

      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/exercicios" element={<Exercicios />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;