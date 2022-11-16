import React, { Component, Fragment } from 'react'
import { Container, Row, Card, Col, Button, Table } from 'react-bootstrap';


class Cart extends Component {
    render() {
        return (
            <Fragment>
                <Container className='container-shop'>
                    <Row>
                        <Col className="p1" lg={8} md={8} sm={8} xs={12}>
                            <Table hover>
                                <thead className='table-head'>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Valor unitario</th>
                                        <th>IVA</th>
                                        <th>Descuento</th>
                                        <th>Importe</th>
                                    </tr>
                                </thead>
                                <tbody className='table-body'>
                                    <tr>
                                        <td>Guantes</td>
                                        <td>3</td>
                                        <td>$ 60.00</td>
                                        <td>$ 0.10</td>
                                        <td>0 %</td>
                                        <td>$ 60.30</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Col>
                       
                        <Col lg={4} md={4} sm={4} xs={12}>
                            <Card className='card-shop'>
                                <Card.Header className='card-shop-title'>DEPÓSITO DENTAL ANÁHUAC</Card.Header>
                                <Card.Body>
                                    <Card.Title> Subtotal : $ 255.00</Card.Title>
                                    <Card.Title> Importe total = $ 260.00</Card.Title>
                                    <Card.Text className='card-shop-btn'>
                                        <h6>Fecha: 03/11/2022</h6>
                                        <h6>RFC: </h6>
                                        <h6>Hidalgo #771-A Col. Centro Acámbaro, Gto.</h6>
                                        <h6>Tel: 1722553</h6>
                                        <h6>depositoanahuac@gmail.com</h6>
                                        <Button className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-shopping-basket"> Comprar</i> </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Cart