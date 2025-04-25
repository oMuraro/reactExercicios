import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api';

const ConsultarTecnico = () => {
    const location = useLocation();
    const [tecnico, setTecnico] = useState(location.state)

    const navigate = useNavigate();

    const payload = {
        id: tecnico.id,
        name: tecnico.nome,
        contact: tecnico.contato
    }

    const alterarTecnico = () => {
        api.put('/tecnicos/'+tecnico.id, payload)
        .then(() => {
            alert('Alterado');
            navigate(-1);
        })
    }

    const excluirTecnico = () => {
        api.delete('/tecnicos/'+tecnico.id)
        .then(() => {
            alert('Deletado');
            navigate(-1);
        })
    }

    return (
        <Container>
            <h3>Consultar Tecnico</h3>
            <Row>
                <Col>
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" name="nome" value={tecnico.nome} onChange={(e) => setTecnico({...tecnico, nome: e.target.value})}/>
                </Col>
                <Col>
                    <Form.Label>Contato: </Form.Label>
                    <Form.Control type="text" name="contato" value={tecnico.contato} onChange={(e) => setTecnico({...tecnico, contato: e.target.value})}/>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <Button variant="warning" onClick={alterarTecnico}>Alterar</Button>
                    <Button variant="danger" onClick={excluirTecnico}>Excluir</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ConsultarTecnico;