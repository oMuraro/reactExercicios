import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';

const NovoManutencao = () => {
    return (
        <Container>
            <h3>Nova Manutenção</h3>
            <Row>
                <Col>
                    <Form.Label>Equipamento: </Form.Label>
                    <Form.Control type="text" name="nome" />
                </Col>
                <Col>
                    <Form.Label>Técnico: </Form.Label>
                    <Form.Control type="text" name="descricao" />
                </Col>
                <Col>
                    <Form.Label>Serviço: </Form.Label>
                    <Form.Control type="text" name="numero_serie" />
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Form.Control type="date" name="data_inicio" />
                </Col>
                <Col md="4">
                    <Form.Control type="date" name="data_termino" />
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

export default NovoManutencao;