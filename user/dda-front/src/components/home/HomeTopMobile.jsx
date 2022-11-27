import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Badge, Accordion } from 'react-bootstrap';
import NavMenuMobile from '../../components/common/NavMenuMobile';
import AppURL from '../../api/AppURL';
import axios from 'axios'

class HomeTopMobile extends Component {

     constructor() {
          super();
          this.state = {
               MenuData: [],
               mainDiv: "d-none"
          }
     }

     componentDidMount() {
          axios.get(AppURL.AllProductDetails).then(response => {
               this.setState({ MenuData: response.data, mainDiv: " " });
          }).catch(error => {

          });
     }


     render() {
          const ProductList = this.state.MenuData;
          const MyView = ProductList.map((ProductList, i) => {

               return <Col key={i.toString()} className="p-0" xl={2} lg={2} md={2} sm={6} xs={6}>
                    <Card className="h-100 w-100 text-center">
                         <Card.Body>
                              <h5 className='category-name'> {ProductList.code} {ProductList.product} </h5>
                              <h6><Badge bg="primary" pill>
                                   Stock: {ProductList.stock}
                              </Badge></h6>
                              <p className="product-name-on-card">
                                   P.U. ${ProductList.unitary_price}
                                   <p>
                                        IVA ${ProductList.iva}
                                        <p>
                                             Desc. {ProductList.discount} %
                                        </p>
                                        <p>
                                             Importe ${ProductList.amount}  <a href=""><i className='fa fa-cart-plus' style={{ color: 'white' }}></i></a>
                                        </p>
                                   </p>
                              </p>
                              <Accordion>
                                   <Accordion.Item eventKey="0">
                                        <Accordion.Header className='Accordion-Header'>Descripción</Accordion.Header>
                                        <Accordion.Body className='Accordion-Body'>
                                             <h6>{ProductList.description}</h6>
                                        </Accordion.Body>
                                   </Accordion.Item>
                              </Accordion>


                         </Card.Body>
                    </Card>
               </Col>



          });


          return (
               <Fragment>
                    <NavMenuMobile></NavMenuMobile>

                    <div className={this.state.mainDiv}>
                         <Container className="text-center" fluid={true}>
                              <Row className='p-2'>
                                   <Row>
                                        {MyView}
                                   </Row>
                              </Row>
                         </Container>

                    </div>

               </Fragment>
          )
     }
}

export default HomeTopMobile
