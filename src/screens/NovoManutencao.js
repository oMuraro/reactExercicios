import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import api from '../api';

const NovoManutencao = () => {
    const [equipamentos, setEquipamentos] = useState([]);
    const [tecnicos, setTecnicos] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [manutencao, setManutencao] = useState({ equipment_id: '', technician_id: '', service_id: '', start_date: '', end_date: '' })

    useEffect(() => {
        api.get('/equipamentos')
            .then(response => {
                setEquipamentos(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar equipamentos:", error);
            });

        api.get('/tecnicos')
            .then(response => {
                setTecnicos(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar técnicos:", error);
            });

        api.get('/servicos')
            .then(response => {
                setServicos(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar serviços:", error);
            });
    }, []);

    const salvarManutencao = () => {
        console.log(manutencao)
        try {
            api.post('/manutencoes', manutencao)
            alert('Salvo')
        } catch (e) {
            console.log('Erro:' + (e));
        }
    }

    return (
        <Container>
            <h3>Nova Manutenção</h3>
            <Row>
                <Col>
                    <Form.Label>Equipamento: </Form.Label>
                    <Form.Control as="select" name="nome" value={manutencao.equipment_id} onChange={(e) => setManutencao({ ...manutencao, equipment_id: e.target.value })}>
                        <option value=""></option>
                        {equipamentos.map((equipamento) =>
                            <option key={equipamento.id} value={equipamento.id}>{equipamento.descricao}</option>
                        )}
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Label>Técnico: </Form.Label>
                    <Form.Control as="select" name="nome" value={manutencao.technician_id} onChange={(e) => setManutencao({ ...manutencao, technician_id: e.target.value })}>
                        <option value=""></option>
                        {tecnicos.map((tecnico) =>
                            <option key={tecnico.id} value={tecnico.id}>{tecnico.nome}</option>
                        )}
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Label>Serviço: </Form.Label>
                    <Form.Control as="select" name="descricao" value={manutencao.service_id} onChange={(e) => setManutencao({ ...manutencao, service_id: e.target.value })}>
                        <option value=""></option>
                        {servicos.map((servico) =>
                            <option key={servico.id} value={servico.id}>{servico.descricao}</option>
                        )}
                    </Form.Control>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Form.Control type="date" name="data_inicio" value={manutencao.start_date} onChange={(e) => setManutencao({ ...manutencao, start_date: e.target.value })} />
                </Col>
                <Col md="4">
                    <Form.Control type="date" name="data_termino" value={manutencao.end_date} onChange={(e) => setManutencao({ ...manutencao, end_date: e.target.value })} />
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <Button variant="success" onClick={salvarManutencao}>Salvar</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default NovoManutencao;