import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Servicos = () => {
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
                    <tr>
                        <td>Conserto de Antena</td>
                        <td>R$ 200,00</td>
                        <td><Button variant="info" as={Link} to="/consultar_servico">Consultar</Button></td>
                    </tr>
                    <tr>
                        <td>Conserto de Antena</td>
                        <td>R$ 200,00</td>
                        <td><Button variant="info">Consultar</Button></td>
                    </tr>
                    <tr>
                        <td>Conserto de Antena</td>
                        <td>R$ 200,00</td>
                        <td><Button variant="info">Consultar</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Servicos;