import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import api from '../api';

const NovoEquipamento = () => {
    const [equipamento, setEquipamento] = useState({name: '', description: '', serial_number: ''});

    const salvarEquipamento = () => {
        try{
            api.post('/equipamentos', equipamento);
            alert('Inseriu equipamento');
        } catch(e) {
            console.log("Erro: " + e);
        }

        setEquipamento({name: "", description: "", serial_number: ""});
    }

    return (
        <Container>
            <h3>Novo Equipamento</h3>
            <Row>
                <Col>
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" name="name" value={equipamento.name} onChange={(e) => setEquipamento({...equipamento, name: e.target.value})}/>
                </Col>
                <Col>
                    <Form.Label>Descrição: </Form.Label>
                    <Form.Control type="text" name="description" value={equipamento.description} onChange={(e) => setEquipamento({...equipamento, description: e.target.value})}/>
                </Col>
                <Col>
                    <Form.Label>Numero de Série: </Form.Label>
                    <Form.Control type="text" name="serial_number" value={equipamento.serial_number} onChange={(e) => setEquipamento({...equipamento, serial_number: e.target.value})}/>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <Button variant="success" onClick={salvarEquipamento}>Salvar</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default NovoEquipamento;