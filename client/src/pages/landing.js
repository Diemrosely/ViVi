import React, { Component } from "react";
import ModalPopUp from "../components/Modal";
import { Container, Row } from 'react-bootstrap';
// import ModalPopUp from "../components/Modal/index";
// import PatientForm from '../components/form';
import Image1 from  '../assets/FirstSection/Sign.png';
import './landing.css'

class Landing extends Component {
    render() {
      return (
          <Container>
              <Row>
              <img src={Image1} alt="First Image" className="picture"/>
              </Row>
              <Row>
                <ModalPopUp/>
              </Row>
          </Container>
              
      );
    }
  }
  
  export default Landing;