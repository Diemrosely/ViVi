import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PatientForm() {
    return (
        <div>
            <h2>COVID-19 SCREENING QUESTIONNAIRE</h2>
            <Form style={{ backgroundColor: "whitesmoke" }}>
                <fieldset style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                     <Form.Label column sm={2}>
                                 First Name
                     </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="name" placeholder="First Name" />
                      </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                     <Form.Label column sm={2}>
                                 Last Name
                     </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="name" placeholder="Last Name" />
                      </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                     <Form.Label column sm={2}>
                                 Email
                     </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="email" placeholder="Email" />
                      </Col>
                </Form.Group>

                    <p style={{ fontSize: "20px" }}>Over the past 14 days,have you had any of these	symptoms?</p>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column md={5}>
                            1. Dry Cough ?
                 </Form.Label>
                 <Col xs="auto" className="my-1">
                           <Form.Check
                                type="checkbox"
                                id="customControlAutosizing"
                                label="Yes"
                                 custom
                              />
                              </Col>
                              <Col xs="auto" className="my-1">
                            <Form.Check
                                type="checkbox"
                                 id="customControlAutosizing"
                                 label="No"
                                    custom
                              />
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column md={5}>
                            2.Shortness of breath ?
                 </Form.Label>
                 <Col xs="auto" className="my-1">
                           <Form.Check
                                type="checkbox"
                                id="customControlAutosizing"
                                label="Yes"
                                 custom
                              />
                </Col>
                <Col xs="auto" className="my-1">
                                 <Form.Check
                                type="checkbox"
                                 id="customControlAutosizing"
                                 label="No"
                                    custom
                                      />
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column md={5}>
                            3.Muscle Aches ?
                 </Form.Label>
                 <Col xs="auto" className="my-1">
                           <Form.Check
                                type="checkbox"
                                id="customControlAutosizing"
                                label="Yes"
                                 custom
                              />
                            </Col>
                            <Col xs="auto" className="my-1">
                            <Form.Check
                                type="checkbox"
                                 id="customControlAutosizing"
                                 label="No"
                                    custom
                              />
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column md={5}>
                            4.Sore Throat ?
                 </Form.Label>
                 <Col xs="auto" className="my-1">
                           <Form.Check
                                type="checkbox"
                                id="customControlAutosizing"
                                label="Yes"
                                 custom
                              />
                            </Col>
                            <Col xs="auto" className="my-1">
                            <Form.Check
                                type="checkbox"
                                 id="customControlAutosizing"
                                 label="No"
                                    custom
                              />
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column md={5}>
                            5.Headache ?
                 </Form.Label>
                 <Col xs="auto" className="my-1">
                           <Form.Check
                                type="checkbox"
                                id="customControlAutosizing"
                                label="Yes"
                                 custom
                              />
                            </Col>
                            <Col xs="auto" className="my-1">
                            <Form.Check
                                type="checkbox"
                                 id="customControlAutosizing"
                                 label="No"
                                    custom
                              />
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column md={5}>
                            6.Fatigue ?
                 </Form.Label>
                 <Col xs="auto" className="my-1">
                           <Form.Check
                                type="checkbox"
                                id="customControlAutosizing"
                                label="Yes"
                                 custom
                              />
                            </Col>
                            <Col xs="auto" className="my-1">
                                <Form.Check
                                type="checkbox"
                                 id="customControlAutosizing"
                                 label="No"
                                    custom
                              />
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column md={5}>
                            7.Have you had any close contact with anyone with COVID-19("Close contact is defined as less than 6ft distance for more than 10min") ?
                 </Form.Label>
                 <Col xs="auto" className="my-1">
                           <Form.Check
                                type="checkbox"
                                id="customControlAutosizing"
                                label="Yes"
                                 custom
                              />
                            </Col>
                            <Col xs="auto" className="my-1">
                            <Form.Check
                                type="checkbox"
                                 id="customControlAutosizing"
                                 label="No"
                                    custom
                              />
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" variant="dark">Submit</Button>
                    </Col>
                    </Form.Group>
                </fieldset>
            </Form>
        </div>
    );
}


export default PatientForm;