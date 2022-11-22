import React, { Component, Fragment } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import Login from '../../assets/images/login.png';
import { Link } from 'react-router-dom';

class UserLogin extends Component {


     render() {


          return (
               <Fragment>
                    <Container className='container-login'>
                         <Row className='p-2'>
                              <Col className='mt-2' md={12} lg={12} sm={12} xs={12}>
                                   <Row className='text-center'>
                                        <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                                             <Form className='onboardForm'>
                                                  <h4 className='section-title-login'>INICIO DE SESIÓN DEL USUARIO</h4>
                                                  <br></br>
                                                  <input className='form-control m-2' type="email" placeholder='Email'></input>
                                                  <input className='form-control m-2' type="password" placeholder='Contraseña'></input>
                                                  <Button className='btn btn-block m-2 site-btn-login'>Siguiente</Button>
                                                  <br /><br />
                                                  <p className='forgotPassword'>¿Olvidaste la contraseña? <Link className='newPassword' to="/forget">
                                                       Restablecer contraseña</Link></p>
                                             </Form>
                                        </Col>

                                        <Col className='p-0 Desktop m-0' md={6} lg={6} sm={6} xs={6}>
                                             <img className='onboardBanner' src={Login}></img>
                                        </Col>
                                   </Row>
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

export default UserLogin
