import React from "react";
import { useStoreContext } from '../utils/GlobalStore';
import NavBar from '../components/navbar';
import AppJumbo from '../components/jumbotron';
import WaitingTable from '../components/waitingtable';
import Table from 'react-bootstrap/Table';
import '../components/waitingtable.css';

function Members() {
  const [state] = useStoreContext();
  const { email } = state;
  return (
    <div>
      <div className="row">
        <div className="col text-center">
          <NavBar />
        </div>
        <div className="col text-right">
          <span>Welcome {email}</span>
        </div>
      </div>
      <AppJumbo />
      <div className="row">
        <div className="col text-center">
          {/* Updated Table */}
          <Table striped bordered hover variant="dark" >
            <thead style={{ textDecoration: "underline", backgroundColor: "#5532A8" }}>
              <tr>
                <th>
                  Id
                  </th>
                <th>
                  Name
                  </th>
                <th>
                  Age
                  </th>
                <th>
                  Email
                  </th>
                <th>
                  Status
                  </th>
                <th>
                  Alert
                  </th>
              </tr>
            </thead>
            <tbody>
              <WaitingTable />
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Members;