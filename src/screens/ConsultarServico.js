import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';

const ConsultarServico = () => {
    return (
        <Container>
            <h3>Consultar Serviço</h3>
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
                    <Button variant="warning">Alterar</Button>
                    <Button variant="danger">Excluir</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ConsultarServico;