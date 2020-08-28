import React, { Component } from "react";
import ModalPopUp from "../components/Modal";
import Row from 'react-bootstrap/row';
// import ModalPopUp from "../components/Modal/index";
// import PatientForm from '../components/form';
import Image1 from  '../assets/FirstSection/final.png';
import Image2 from '../assets/SecondSection/step.png';
import './landing.css'
import ButtonAppBar from '../components/NavBar2/navbar2.jsx';
// import Video from '../assets/FirstSection/background.mp4'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image3 from '../assets/images/why.png';

class Landing extends Component {
    render() {
      const addIcon = <FontAwesomeIcon size="3x" icon={["fas", "arrow-alt-circle-right"]}/> 
      return (
          <div>
              <ButtonAppBar/>
              <Row>
              <img src={Image1} alt="First graphic" className="img-fluid"/>
              </Row>
              <Row className='hoverbox'>
                <Col className='text-center patientbutton'>  Patient COVID-19 Pre-Screen Form { addIcon} </Col>
                <Col className='text-right position-relative'><ModalPopUp/></Col>
              </Row>
              <Row>
              <img src={Image2} alt="Second graphic" className="img-fluid"/>
              </Row>
              <Row className='hoverbox'>
                <Col className='text-center whyvivi'> HOW WE CAN HELP</Col>
              </Row>
              <Row>
              <img src={Image3} alt="Third Image" className="img-fluid"/>
              </Row>
          </div>
              
      );
    }
  }
  
  export default Landing;