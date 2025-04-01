import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Equipametos = () => {
    return (
        <Container>
            <h3>Lista de Equipamentos</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td>Antena</td>
                        <td>Parabólica</td>
                        <td><Button variant="info" as={Link} to="/consultar_equipamento">Consultar</Button></td>
                    </tr>
                    <tr>
                        <td>Antena</td>
                        <td>Parabólica</td>
                        <td><Button variant="info">Consultar</Button></td>
                    </tr>
                    <tr>
                        <td>Antena</td>
                        <td>Parabólica</td>
                        <td><Button variant="info">Consultar</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Equipametos;