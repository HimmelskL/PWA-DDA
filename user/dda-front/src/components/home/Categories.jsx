import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import NavMenuMobile from '../common/NavMenuMobile';
import { Link } from 'react-router-dom';

class Categories extends Component {

     constructor() {
          super();
          this.state = {
               MenuData: [], 
               mainDiv:"d-none"
          }
     }

     componentDidMount() {
          axios.get(AppURL.AllCategoryDetails).then(response => {
               this.setState({ MenuData: response.data, mainDiv:" "});
          }).catch(error => {

          });
     }


     render() {
          const CatList = this.state.MenuData;
          const MyView = CatList.map((CatList, i) => {

               return <Col key={i.toString()} className="p-0" xl={2} lg={2} md={2} sm={6} xs={6}>
                    <Link to={"/productcategory/"+CatList.category_name}>
                    <Card className="h-100 w-100 text-center">
                         <img className='center' src={CatList.category_image} /> 
                         <Card.Body>
                              <h5 className='category-name'> {CatList.category_name} </h5>
                         </Card.Body>
                    </Card>
                    </Link>
               </Col>



          });


          return (
               <Fragment>
                    <NavMenuMobile></NavMenuMobile>

               <div className={this.state.mainDiv}>
                    <Container className="text-center" fluid={true}>
                         <Row className='p-2'>
                              <div className='section-title'><h2> CATEGORÍAS</h2></div>
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

export default Categories
