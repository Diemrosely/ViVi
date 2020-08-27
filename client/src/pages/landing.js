import React, { Component } from "react";
import ModalPopUp from "../components/Modal";
import { Container, Row, Col } from 'react-bootstrap';
// import ModalPopUp from "../components/Modal/index";
// import PatientForm from '../components/form';
import Image1 from  '../assets/FirstSection/final.png';
import Image2 from '../assets/SecondSection/step.png';
import './landing.css'
import ButtonAppBar from '../components/NavBar2/navbar2.jsx';
// import Video from '../assets/FirstSection/background.mp4'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Landing extends Component {
    render() {
      const addIcon = <FontAwesomeIcon size="3x" icon={["fas", "arrow-alt-circle-right"]}/> 
      return (
          <div>
              <ButtonAppBar/>
              <Row>
              <img src={Image1} alt="First Image" className="img-fluid"/>
              </Row>
              <Row className='hoverbox'>
                <Col className='text-center'>  Patient COVID-19 Pre-Screen Form { addIcon} </Col>
                <Col className='text-right position-relative'><ModalPopUp/></Col>
              </Row>
              <Row>
              <img src={Image2} alt="Second Image" className="img-fluid"/>
              </Row>
          </div>
              
      );
    }
  }
  
  export default Landing;