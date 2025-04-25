import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import api from '../api';

const NovoServico = () => {

    const [servico, setServico] = useState({ description: '', cost: '' });

    const salvarServico = () => {
        try {
            api.post('servicos', servico);
            alert("Inserido;");
        } catch (e) {
            console.log("Erro: " + e);
        }

        setServico({name: "", description: ""});
    }

    return (
        <Container>
            <h3>Novo Serviço</h3>
            <Row>
                <Col>
                    <Form.Label>Descrição: </Form.Label>
                    <Form.Control type="text" name="description" value={servico.description} onChange={(e) => setServico({ ...servico, description: e.target.value })} />
                </Col>
                <Col>
                    <Form.Label>Custo: </Form.Label>
                    <Form.Control type="text" name="cost" value={servico.cost} onChange={(e) => setServico({ ...servico, cost: e.target.value })} />
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <Button variant="success" onClick={salvarServico}>Salvar</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default NovoServico;