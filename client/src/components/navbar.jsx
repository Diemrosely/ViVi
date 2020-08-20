import React from 'react';
import Nav from 'react-bootstrap/Nav'


const TableQue = () => { 

return(
<Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Wait list</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Scheduled Patients</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Processed Patients</Nav.Link>
  </Nav.Item>
</Nav>
)
}
export default TableQue;