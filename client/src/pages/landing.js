import React, { Component } from "react";
import ModalPopUp from "../components/Modal";
import  Row from 'react-bootstrap/row';
// import ModalPopUp from "../components/Modal/index";
// import PatientForm from '../components/form';
import Image1 from  '../assets/FirstSection/Sign.png';
import './landing.css'

class Landing extends Component {
    render() {
      return (
          <div>
              <Row>
              <img src={Image1} alt="First Image" className="picture"/>
              </Row>
              <Row>
                <ModalPopUp/>
              </Row>
          </div>
              
      );
    }
  }
  
  export default Landing;