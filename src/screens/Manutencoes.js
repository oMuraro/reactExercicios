import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Manutencoes = () => {
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
                    <tr>
                        <td>Antena</td>
                        <td>Pablo</td>
                        <td>Consertar Antena</td>
                        <td>2025-04-01</td>
                        <td>2025-04-08</td>
                        <td><Button variant="info" as={Link} to="/consultar_manutencao">Consultar</Button></td>
                    </tr>
                    <tr>
                    <td>Antena</td>
                        <td>Pablo</td>
                        <td>Consertar Antena</td>
                        <td>2025-04-01</td>
                        <td>2025-04-08</td>
                        <td><Button variant="info">Consultar</Button></td>
                    </tr>
                    <tr>
                    <td>Antena</td>
                        <td>Pablo</td>
                        <td>Consertar Antena</td>
                        <td>2025-04-01</td>
                        <td>2025-04-08</td>
                        <td><Button variant="info">Consultar</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Manutencoes;