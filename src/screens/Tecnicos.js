import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../api';

const Tecnicos = () => {
    const [tecnicos, setTecnicos] = useState([]);

    useEffect(() => {
        api.get('/tecnicos')
        .then(response => {
            setTecnicos(response.data)
        })
        .catch(response => {
            console.log("Erro ao consultar tecnicos");
        })
    }, [])

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
                    {tecnicos.map((tecnico) => 
                    <tr>
                        <td>{tecnico.nome}</td>
                        <td>{tecnico.contato}</td>
                        <td><Button variant="info" as={Link} to="/consultar_tecnico" state={tecnico}>Consultar</Button></td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
}

export default Tecnicos;