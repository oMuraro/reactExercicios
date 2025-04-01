import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tecnicos = () => {
    return (
        <Container>
            <h3>Lista de Tecnicos</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <th>Nome</th>
                    <th>Contato</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td>Pablo</td>
                        <td>18 993818295</td>
                        <td><Button variant="info" as={Link} to="/consultar_tecnico">Consultar</Button></td>
                    </tr>
                    <tr>
                        <td>Pablo</td>
                        <td>18 993818295</td>
                        <td><Button variant="info">Consultar</Button></td>
                    </tr>
                    <tr>
                        <td>Pablo</td>
                        <td>18 993818295</td>
                        <td><Button variant="info">Consultar</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Tecnicos;