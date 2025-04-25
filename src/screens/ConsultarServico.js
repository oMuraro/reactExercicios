import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api';

const ConsultarServico = () => {
    
    const location = useLocation();
    const [servico, setServico] = useState(location.state);
    
    const navigate = useNavigate();
    
    console.log(servico);
    const payload = {
        id: servico.id,
        description: servico.descricao,
        cost: servico.custo
    }

    const alterarServico = () => {
        api.put('/servicos/' + servico.id, payload)
            .then(() => {
                alert('Alterado')
                navigate(-1);
            })

    }

    const excluirServico = () => {
        api.delete('/servicos/' + servico.id)
            .then(() => {
                alert('Excluido')
                navigate(-1);
            })
    }

    return (
        <Container>
            <h3>Consultar Serviço</h3>
            <Row>
                <Col>
                    <Form.Label>Descrição: </Form.Label>
                    <Form.Control type="text" name="descricao" value={servico.descricao} onChange={(e) => setServico({ ...servico, descricao: e.target.value })} />
                </Col>
                <Col>
                    <Form.Label>Custo: </Form.Label>
                    <Form.Control type="text" name="custo" value={servico.custo} onChange={(e) => setServico({ ...servico, custo: e.target.value })} />
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <Button variant="warning" onClick={alterarServico}>Alterar</Button>
                    <Button variant="danger" onClick={excluirServico}>Excluir</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ConsultarServico;