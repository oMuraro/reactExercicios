import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api';

const ConsultarEquipamento = () => {
    const location = useLocation();
    const [equipamento, setEquipamento] = useState(location.state);

    const navigate = useNavigate();

    const payload = {
        id: equipamento.id,
        name: equipamento.nome,
        description: equipamento.descricao,
        serial_number: equipamento.numero_serie
    };

    const alterarEquipamento = () => {
        api.put('/equipamentos/' + equipamento.id, payload)
            .then(() => {
                alert("Registro alterado");
            });
        navigate(-1);
    }

    const excluirEquipamento = () => {
        if (window.confirm("Excluir Registro?")) {
            api.delete('/equipamentos/' + equipamento.id)
                .then(() => {
                    alert('Excluido')
                })
                navigate(-1);
        }
    }

    return (
        <Container>
            <h3>Consultar Equipamento</h3>
            <Row>
                <Col>
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" name="nome" value={equipamento.nome} onChange={(e) => setEquipamento({ ...equipamento, nome: e.target.value })} />
                </Col>
                <Col>
                    <Form.Label>Descrição: </Form.Label>
                    <Form.Control type="text" name="descricao" value={equipamento.descricao} onChange={(e) => setEquipamento({ ...equipamento, descricao: e.target.value })} />
                </Col>
                <Col>
                    <Form.Label>Numero de Série: </Form.Label>
                    <Form.Control type="text" name="numero_serie" value={equipamento.numero_serie} onChange={(e) => setEquipamento({ ...equipamento, numero_serie: e.target.value })} />
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <Button variant="warning" onClick={alterarEquipamento}>Alterar</Button>
                    <Button variant="danger" onClick={excluirEquipamento}>Excluir</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ConsultarEquipamento;