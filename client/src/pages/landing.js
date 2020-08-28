import React, { Component } from "react";
import ModalPopUp from "../components/Modal";
import Row from 'react-bootstrap/row';
// import ModalPopUp from "../components/Modal/index";
// import PatientForm from '../components/form';
import Image1 from  '../assets/FirstSection/final.png';
import Image2 from '../assets/SecondSection/step.png';
import './landing.css'

class Landing extends Component {
    render() {
      return (
          <div>
              <Row>
              <img src={Image1} alt="First graphic" className="img-fluid"/>
              </Row>
              <Row>
                <ModalPopUp/>
              </Row>
              <Row>
              <img src={Image2} alt="Second graphic" className="img-fluid"/>
              </Row>
          </div>
              
      );
    }
  }
  
  export default Landing;