import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';

const ConsultarTecnico = () => {
    return (
        <Container>
            <h3>Consultar Tecnico</h3>
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
                    <Button variant="warning">Alterar</Button>
                    <Button variant="danger">Excluir</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ConsultarTecnico;