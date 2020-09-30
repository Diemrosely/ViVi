import React, { useState} from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import utils from "../../utils/API.js";

function ModalPopUp() { 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [riskLevel, setRiskLevel] = useState(0)
  const [dryCough, setDryCough] = useState(0);
  const [sob, setSob] = useState(0);
  const [Aches, setAches] = useState(0);
  const [soreThroat, setSoreThroat] = useState(0);
  const [headache, setHeadache] = useState(0);
  const [fatigue, setFatigue] = useState(0);
  const [exposure, setExposure] = useState(0);
  const [age, setAge] = useState(0)
  const [patient, setpatient] = useState([])
  const riskState = () => {
      
    let count = 0;
    let risk = 0;
    let ternary= null;
   ternary= dryCough ? count++ : null;
   ternary= sob ? count++ : null;
   ternary= Aches ? count++ : null;
   ternary= soreThroat ? count++ : null;
   ternary= headache ? count++ : null;
   ternary= fatigue ? count++ : null;
   ternary= exposure ? count++ : null;
   
  
    if (count <= 2) {
      risk += 1
    }
    if (count > 2 && count <= 4) {
      risk += 2
    }
    if (count > 4) {
      risk += 3
    }
    setRiskLevel({ riskLevel: risk })
    console.log("count",count);
    console.log("risk",risk)
    return risk;
  }


  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setDryCough('');
    setSob('');
    setAches('');
    setSoreThroat('');
    setHeadache('');
    setFatigue('');
    setExposure('');
    setRiskLevel(0);
  }

  const onSearchSubmit = () => {
    let r= riskState()
    handleClose()
    resetForm()
    utils.newPatient({
      first: FirstName,
      last: LastName,
      email:email,
      age: age,
      riskLevel:r
    })
    .then((res) => { 
      console.log(res)
    })
    console.log(FirstName, LastName, email, riskLevel)
  }

  return (
    <>
      <Button className='patientClick' variant="primary" onClick={handleShow}>
        Patients CLICK HERE!
        </Button>
      <Modal
        show={show} onHide={handleClose} animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Patient Evaluation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h2>COVID-19 SCREENING QUESTIONNAIRE</h2>
            <Form style={{ backgroundColor: "whitesmoke" }}>
              <fieldset style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    First Name:
              </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      name="FirstName"
                      type="Name"
                      placeholder="First Name"
                      value={FirstName}
                      onChange={event => setFirstName(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Last Name:
              </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      name="LastName"
                      type="LastName"
                      placeholder="Last Name"
                      value={LastName}
                      onChange={event => setLastName(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Email:
              </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={event => setEmail(event.target.value)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Age:
              </Form.Label>
                  <Col sm={2}>
                    <Form.Control
                      name="age"
                      type="age"
                      placeholder="age"
                      value={age}
                      onChange={event => setAge(parseInt(event.target.value) || 0)}
                    />
                  </Col>
                </Form.Group>
                <p style={{ fontSize: "20px" }}>
                  Over the past 14 days,have you had any of these symptoms?
            </p>
                <Form.Group as={Row}>
                  <Form.Label as="legend" column md={5}>
                    1. Dry Cough ?
              </Form.Label>
                  <Col xs="auto" className="my-1">
                    <Form.Check
                      type="radio"
                      name="dryCough"
                      label="Yes"
                      value={true}
                      checked={dryCough === true}
                      onChange={() => setDryCough(true)}
                    />
                  </Col>
                  <Col xs="auto" className="my-1">
                    <Form.Check
                      type="radio"
                      name="dryCough"
                      label="No"
                      value={false}
                      checked={dryCough === false}
                      onChange={() => setDryCough(false)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label as="legend" column md={5}>
                    2.Shortness of breath ?
              </Form.Label>
                  <Col xs="auto" className="my-2">
                    <Form.Check
                      type="radio"
                      name="sob"
                      id="Radio3"
                      label="Yes"
                      value={true}
                      checked={sob === true}
                      onChange={() => setSob(true)}
                    />
                  </Col>
                  <Col xs="auto" className="my-2">
                    <Form.Check
                      type="radio"
                      name="sob"
                      id="Radio4"
                      label="No"
                      value={false}
                      checked={sob === false}
                      onChange={() => setSob(false)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label as="legend" column md={5}>
                    3.Muscle Aches ?
              </Form.Label>
                  <Col xs="auto" className="my-1">
                    <Form.Check
                      type="radio"
                      name="Aches"
                      id="Radio5"
                      label="Yes"
                      value={true}
                      checked={Aches === true}
                      onChange={() => setAches(true)}
                    />
                  </Col>
                  <Col xs="auto" className="my-1">
                    <Form.Check
                      type="radio"
                      name="Aches"
                      id="radio6"
                      label="No"
                      value={false}
                      checked={Aches === false}
                      onChange={() => setAches(false)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label as="legend" column md={5}>
                    4.Sore Throat ?
              </Form.Label>
                  <Col xs="auto" className="my-1">
                    <Form.Check
                      type="radio"
                      name="soreThroat"
                      label="Yes"
                      value={true}
                      checked={soreThroat === true}
                      onChange={() => setSoreThroat(true)}
                    />
                  </Col>
                  <Col xs="auto" className="my-1">
                    <Form.Check
                      type="radio"
                      name="soreThroat"
                      label="No"
                      value={false}
                      checked={soreThroat === false}
                      onChange={() => setSoreThroat(false)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label as="legend" column md={5}>
                    5.Headache ?
              </Form.Label>
                  <Col xs="auto" className="my-1">
                    <Form.Check
                      type="radio"
                      name="headache"
                      label="Yes"
                      value={true}
                      checked={headache === true}
                      onChange={() => setHeadache(true)}
                    />
                  </Col>
                  <Col xs="auto" className="my-1">
                    <Form.Check
                      type="radio"
                      name="headache"
                      label="no"
                      value={false}
                      checked={headache === false}
                      onChange={() => setHeadache(false)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label as="legend" column md={5}>
                    6.Fatigue ?
              </Form.Label>
                  <Col xs="auto" className="my-1">
                    <Form.Check
                      type="radio"
                      name="fatigue"
                      label="Yes"
                      value={true}
                      checked={fatigue === true}
                      onChange={() => setFatigue(true)}
                    />
                  </Col>
                  <Col xs="auto" className="my-1">
                    <Form.Check
                      type="radio"
                      name="fatigue"
                      label="No"
                      value={false}
                      checked={fatigue === false}
                      onChange={() => setFatigue(false)}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label as="legend" column md={5}>
                    7.Fever ?
              </Form.Label>
                  <Col xs="auto" className="my-1">
                    <Form.Check
                      type="radio"
                      name="exposure"
                      label="Yes"
                      value={true}
                      checked={exposure === true}
                      onChange={() => setExposure(true)}
                    />
                  </Col>
                  <Col xs="auto" className="my-1">
                    <Form.Check
                      type="radio"
                      name="exposure"
                      label="No"
                      value={false}
                      checked={exposure === false}
                      onChange={() => setExposure(false)}
                    />
                  </Col>
                </Form.Group>
              </fieldset>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button onClick={() => onSearchSubmit()} type="submit">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalPopUp;
