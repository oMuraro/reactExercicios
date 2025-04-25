import React, {useState, useEffect} from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../api';

const Equipametos = () => {
    const [equipamentos, setEquipamentos] = useState([]);

    useEffect(
        () => {
            api.get('equipamentos')
            .then(response => {
                setEquipamentos(response.data);
            })
            .catch(response => {
                console.log("Erro ao consultar equipamentos")
            })
        }, []
    );


    return (
        <Container>
            <h3>Lista de Equipamentos</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Número de Série</th>
                    <th></th>
                </thead>
                <tbody>
                    {equipamentos.map((equipamento => 
                    <tr>
                        <td>{equipamento.nome}</td>
                        <td>{equipamento.descricao}</td>
                        <td>{equipamento.numero_serie}</td>
                        <td><Button variant="info" as={Link} to="/consultar_equipamento" state={equipamento} >Consultar</Button></td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Equipametos;