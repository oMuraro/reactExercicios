import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';

const ConsultarEquipamento = () => {
    return (
        <Container>
            <h3>Consultar Equipamento</h3>
            <Row>
                <Col>
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" name="nome" />
                </Col>
                <Col>
                    <Form.Label>Descrição: </Form.Label>
                    <Form.Control type="text" name="descricao" />
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

export default ConsultarEquipamento;