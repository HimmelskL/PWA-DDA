import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavMenuMobile from './NavMenuMobile';
import ForgetPass from '../../assets/images/forgetPass.png';


class ForgetPassword extends Component {
  render() {
    return (
        <Fragment>
        <NavMenuMobile></NavMenuMobile>

        <Container className='container-login'>
             <Row className='p-2'>
                  <Col className=' mt-2' md={12} lg={12} sm={12} xs={12}>
                       <Row className='text-center'>
                            <Col className='p-0 Desktop m-0' md={6} lg={6} sm={6} xs={6}>
                                 <img className='onboardRegister' src={ForgetPass}></img>
                            </Col>
                            <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                                 <Form className='onboardForm'>
                                      <h4 className='section-title-login'>RECUPERACIÓN DE CONTRASEÑA</h4>
                                      <br></br>
                                      <input className='form-control m-2' type="email" placeholder='Email'></input>
                                      <Button className='btn btn-block m-2 site-btn-login'>Registrarme</Button>                      
                                 </Form>
                            </Col>
                       </Row>
                  </Col>
             </Row>
        </Container>
   </Fragment>
    )
  }
}

export default ForgetPassword