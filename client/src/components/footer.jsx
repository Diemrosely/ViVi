import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
    return (
         < footer className = "mt-5" style={{backgroundColor:"lightgrey",width:"100%",height:"40px"}}>
        < Container fluid={true} >
        <Row className="border-top justify-content-start p-3">
        <Col className="p-0" md={3} sm={12}>
            <b>"ViVi"</b>
            <br/>
            <b>@CopyRight 2020</b>
        </Col>

        </Row>

        </Container>

        </footer>
    );

}
export default Footer;