import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
    return (
         < footer className = "mt-5" style={{backgroundColor:"eeeef3", width:"100%", fontFamily: "serif"}}>
        <Row>
        <Col className="p-0 text-center">
            <div>&copy; VIVI 2020 All Rights Reserved</div>
        </Col>
        </Row>
        </footer>
    );

}
export default Footer;