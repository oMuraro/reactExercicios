import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api';

const ConsultarManutencao = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const manutencao = location.state || {};

    const [equipamentos, setEquipamentos] = useState([]);
    const [tecnicos, setTecnicos] = useState([]);
    const [servicos, setServicos] = useState([]);

    const [form, setForm] = useState({
        equipamento: manutencao.equipamento_id || '',
        tecnico: manutencao.tecnico_id || '',
        servico: manutencao.servico_id || '',
        data_inicio: manutencao.data_inicio ? manutencao.data_inicio.substring(0, 10) : '',
        data_termino: manutencao.data_prevista_termino ? manutencao.data_prevista_termino.substring(0, 10) : '',
    });

    useEffect(() => {
        api.get('/equipamentos').then(res => setEquipamentos(res.data)).catch(() => {});
        api.get('/tecnicos').then(res => setTecnicos(res.data)).catch(() => {});
        api.get('/servicos').then(res => setServicos(res.data)).catch(() => {});
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAlterar = async () => {
        // Validação simples
        if (!form.equipamento || !form.tecnico || !form.servico || !form.data_inicio || !form.data_termino) {
            alert('Preencha todos os campos!');
            return;
        }
        try {
            await api.put(`/manutencoes/${manutencao.id}`, {
                equipment_id: Number(form.equipamento),
                technician_id: Number(form.tecnico),
                service_id: Number(form.servico),
                start_date: form.data_inicio,
                end_date: form.data_termino
            });
            alert('Manutenção alterada com sucesso!');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                alert('Erro ao alterar manutenção: ' + error.response.data.message);
            } else {
                alert('Erro ao alterar manutenção.');
            }
        }
    };

    const handleExcluir = () => {
        if (window.confirm('Deseja realmente excluir esta manutenção?')) {
            api.delete(`/manutencoes/${manutencao.id}`)
                .then(() => {
                    alert('Manutenção excluída com sucesso!');
                    navigate('/manutencoes');
                })
                .catch(() => {
                    alert('Erro ao excluir manutenção.');
                });
        }
    };

    return (
        <Container>
            <h3>Alterar Manutenção</h3>
            <Row>
                <Col>
                    <Form.Label>Equipamento: </Form.Label>
                    <Form.Select name="equipamento" value={form.equipamento} onChange={handleChange}>
                        <option value="">Selecione...</option>
                        {equipamentos.map(e => (
                            <option key={e.id} value={e.id}>{e.descricao}</option>
                        ))}
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label>Técnico: </Form.Label>
                    <Form.Select name="tecnico" value={form.tecnico} onChange={handleChange}>
                        <option value="">Selecione...</option>
                        {tecnicos.map(t => (
                            <option key={t.id} value={t.id}>{t.nome}</option>
                        ))}
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label>Serviço: </Form.Label>
                    <Form.Select name="servico" value={form.servico} onChange={handleChange}>
                        <option value="">Selecione...</option>
                        {servicos.map(s => (
                            <option key={s.id} value={s.id}>{s.descricao}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <Form.Label>Data de Início:</Form.Label>
                    <Form.Control type="date" name="data_inicio" value={form.data_inicio} onChange={handleChange} />
                </Col>
                <Col md="4">
                    <Form.Label>Data de Término:</Form.Label>
                    <Form.Control type="date" name="data_termino" value={form.data_termino} onChange={handleChange} />
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <Button variant="warning" onClick={handleAlterar}>Salvar</Button>{' '}
                    <Button variant="danger" onClick={handleExcluir}>Excluir</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ConsultarManutencao;