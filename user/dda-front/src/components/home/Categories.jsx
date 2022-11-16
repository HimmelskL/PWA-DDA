import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavMenuMobile from '../common/NavMenuMobile';

class Categories extends Component {

     render() {

          return (
               <Fragment>
                    <NavMenuMobile></NavMenuMobile>

                    <Container className='container-category'>
                         <Row className='p-2'>
                              <div className='section-title'><h2> CATEGORÍAS</h2></div>

                              <Row>
                              <Col xl={3} lg={3} md={3} sm={3} xs={3}></Col>
                                   <Col key={1} xl={6} lg={6} md={3} sm={12} xs={12}>
                                        <Row>
                                             <Col className='p-1' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                                  <Card className='h-100 w-100 text-center'>
                                                       <img className='center' src='https://cdn-icons-png.flaticon.com/256/7650/7650263.png' />
                                                       <Card.Body>
                                                            <h5 className='category-name'> Operatoria  </h5>
                                                       </Card.Body>
                                                  </Card>
                                             </Col>

                                             <Col className='p-1' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                                  <Card className='h-100 w-100 text-center'>
                                                       <img className='center' src='https://cdn-icons-png.flaticon.com/256/7650/7650280.png' />
                                                       <Card.Body>
                                                            <h5 className='category-name'> Prótesis  </h5>
                                                       </Card.Body>
                                                  </Card>
                                             </Col>

                                             <Col className='p-1' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                                  <Card className='h-100 w-100 text-center'>
                                                       <img className='center' src='https://cdn-icons-png.flaticon.com/256/7650/7650286.png' />
                                                       <Card.Body>
                                                            <h5 className='category-name'> Ortodoncia  </h5>
                                                       </Card.Body>
                                                  </Card>
                                             </Col>

                                             <Col className='p-1' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                                  <Card className='h-100 w-100 text-center'>
                                                       <img className='center' src='https://cdn-icons-png.flaticon.com/256/7650/7650243.png' />
                                                       <Card.Body>
                                                            <h5 className='category-name'> Endodoncia  </h5>
                                                       </Card.Body>
                                                  </Card>
                                             </Col>

                                             <Col className='p-1' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                                  <Card className='h-100 w-100 text-center'>
                                                       <img className='center' src='https://cdn-icons-png.flaticon.com/256/7650/7650231.png' />
                                                       <Card.Body>
                                                            <h5 className='category-name'> Laboratorio  </h5>
                                                       </Card.Body>
                                                  </Card>
                                             </Col>

                                             <Col className='p-1' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                                  <Card className='h-100 w-100 text-center'>
                                                       <img className='center' src='https://cdn-icons-png.flaticon.com/512/7650/7650240.png' />
                                                       <Card.Body>
                                                            <h5 className='category-name'> General  </h5>
                                                       </Card.Body>
                                                  </Card>
                                             </Col>
                                        </Row>
                                   </Col>
                              </Row>
                         </Row>
                    </Container>



               </Fragment>
          )
     }
}

export default Categories
