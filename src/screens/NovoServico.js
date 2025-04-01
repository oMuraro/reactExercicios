import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';

const NovoServico = () => {
    return (
        <Container>
            <h3>Novo Serviço</h3>
            <Row>
                <Col>
                    <Form.Label>Descrição: </Form.Label>
                    <Form.Control type="text" name="descricao" />
                </Col>
                <Col>
                    <Form.Label>Custo: </Form.Label>
                    <Form.Control type="text" name="custo" />
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

export default NovoServico;