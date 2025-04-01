import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';

const NovoTecnico = () => {
    return (
        <Container>
            <h3>Novo Tecnico</h3>
            <Row>
                <Col>
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" name="nome" />
                </Col>
                <Col>
                    <Form.Label>Contato: </Form.Label>
                    <Form.Control type="text" name="contato" />
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <Button variant="success">Salvar</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default NovoTecnico;