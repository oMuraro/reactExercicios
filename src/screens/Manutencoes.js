import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import api from '../api';

const Manutencoes = () => {
    const [manutencoes, setManutencoes] = useState([]);
    const [equipamentos, setEquipamentos] = useState([]);
    const [tecnicos, setTecnicos] = useState([]);
    const [servicos, setServicos] = useState([]);

    const formatDate = (date) => {
        return format(new Date(date), 'yyy-MM-dd')
    }

    useEffect(() => {
        api.get('/manutencoes')
            .then(response => {
                setManutencoes(response.data);
            })
            .catch(response => {
                console.log('Erro ao consultar manutencoes');
            })

        api.get('/equipamentos')
            .then(response => {
                setEquipamentos(response.data);
            })
            .catch(error => {
                console.log('Erro ao consultar equipamentos');
            });

        api.get('/tecnicos')
            .then(response => {
                setTecnicos(response.data);
            })
            .catch(error => {
                console.log('Erro ao consultar técnicos');
            });

        api.get('/servicos')
            .then(response => {
                setServicos(response.data);
            })
            .catch(error => {
                console.log('Erro ao consultar serviços');
            });
    }, [])

    const getEquipamentoDescricao = (id) => {
        const equipamento = equipamentos.find(e => e.id === id);
        return equipamento ? equipamento.descricao : 'Desconhecido';
    };

    const getTecnicoNome = (id) => {
        const tecnico = tecnicos.find(t => t.id === id);
        return tecnico ? tecnico.nome : 'Desconhecido';
    };

    const getServicoDescricao = (id) => {
        const servico = servicos.find(s => s.id === id);
        return servico ? servico.descricao : 'Desconhecido';
    };

    return (
        <Container>
            <h3>Lista de Manutenções</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <th>Equipamento</th>
                    <th>Tecnico</th>
                    <th>Servico</th>
                    <th>Data de Início</th>
                    <th>Data de Término</th>
                    <th></th>
                </thead>
                <tbody>
                    {manutencoes.map((manutencao) =>
                        <tr>
                            <td>{getEquipamentoDescricao(manutencao.equipamento_id)}</td>
                            <td>{getTecnicoNome(manutencao.tecnico_id)}</td>
                            <td>{getServicoDescricao(manutencao.servico_id)}</td>
                            <td>{formatDate(manutencao.data_inicio)}</td>
                            <td>{formatDate(manutencao.data_prevista_termino)}</td>
                            <td><Button variant="info" as={Link} to="/consultar_manutencao" state={manutencao}>Consultar</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
}

export default Manutencoes;