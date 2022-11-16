import React, { Component, Fragment } from 'react';
import NavMenuMobile from '../components/common/NavMenuMobile';
import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';

export class Info extends Component {

    render() {

       

        return (
            <Fragment>
                <NavMenuMobile></NavMenuMobile>

                <Container className='container-video'>
                    <Row className='p-2'>
                        <Col md={2} lg={2} sm={2} xs={2}></Col>
                        <Col className='shadow-sm bg-white mt-2' md={8} lg={8} sm={8} xs={8}>
                            <Row className='text-center'>
                                <div className='card'>
                                <div className='player-wrapper'>
                                    <ReactPlayer url='https://youtu.be/p20f2ADyCL4'
                                        controls playing muted playbackRate={1.75} onEnded={() => alert('Gracias por ver')}>
                                    </ReactPlayer>
                                    </div>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        )
    }
}

export default Info