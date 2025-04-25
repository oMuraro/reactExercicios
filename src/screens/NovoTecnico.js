import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import api from '../api';

const NovoTecnico = () => {
    const [tecnico, setTecnico] = useState({ name: '', contact: '' });

    const salvarTecnico = () => {
        try {
            api.post('/tecnicos', tecnico);
            alert('Inserido');
        } catch (e) {
            console.log("Erro: " + e);
        }

        setTecnico({name: "", contact: ""});
    }


    return (
        <Container>
            <h3>Novo Tecnico</h3>
            <Row>
                <Col>
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" name="nome" value={tecnico.name} onChange={(e) => setTecnico({ ...tecnico, name: e.target.value })} />
                </Col>
                <Col>
                    <Form.Label>Contato: </Form.Label>
                    <Form.Control type="text" name="contato" value={tecnico.contact} onChange={(e) => setTecnico({ ...tecnico, contact: e.target.value })} />
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <Button variant="success" onClick={salvarTecnico}>Salvar</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default NovoTecnico;