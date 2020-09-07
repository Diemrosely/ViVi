import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './landingform.css'

function LandingForm() {
return(

<Form className="form img-fluid" style={{width:"100%"}}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label rows="12">Message</Form.Label>
      {/* <Form.Control type="text" placeholder="Message" /> */}
      <Form.Control as="textarea" rows="12" />
    </Form.Group>
    </Form.Row>

  <Button variant="primary" type="submit">
    Want a demo?
  </Button>
</Form>

)};

export default LandingForm