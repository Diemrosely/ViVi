import React, { useState } from 'react';
import { Modal, Button} from 'react-bootstrap';
import PatientForm from '../form';

function ModalPopUp() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className='patientClick' variant="primary" onClick={handleShow}>
          Patients CLICK HERE!
        </Button>
  
        <Modal
         show={show} onHide={handleClose} animation={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >
          <Modal.Header closeButton>
            <Modal.Title>Patient Evaluation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PatientForm/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit">Submit</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
//   render(<ModalPopUp />);

  export default ModalPopUp;