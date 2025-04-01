import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';

const NovoEquipamento = () => {
    return (
        <Container>
            <h3>Novo Equipamento</h3>
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
                    <Button variant="success">Salvar</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default NovoEquipamento;