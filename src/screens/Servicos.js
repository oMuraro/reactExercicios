import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../api';

const Servicos = () => {
    const [servicos, setServicos] = useState([])

    useEffect(
        () => {
            api.get('servicos')
                .then(response => {
                    setServicos(response.data);
                })
                .catch(response => {
                    console.log("Erro ao consultar servicos")
                })
        }, []
    );


    return (
        <Container>
            <h3>Lista de Serviços</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <th>Descrição</th>
                    <th>Custo</th>
                    <th></th>
                </thead>
                <tbody>
                    {servicos.map((servico) =>
                        <tr>
                            <td>{servico.descricao}</td>
                            <td>{servico.custo}</td>
                            <td><Button variant="info" as={Link} to="/consultar_servico" state={servico}>Consultar</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
}

export default Servicos;