import React, { useEffect } from "react";
import { useStoreContext } from '../utils/GlobalStore';
import NavBar from '../components/navbar';
import AppJumbo from '../components/jumbotron';
import WaitingTable from '../components/waitingtable';
import Table from 'react-bootstrap/Table';
import '../components/waitingtable.css';
import API from "../utils/API";

function Members() {
  const [state] = useStoreContext();
  const { email } = state;
  const [ patients, setPatients] = React.useState([]); 
  // use state called patients 
  // use effect that will fire once, second argument of use effect will be empty []
  
  useEffect(() => {
    let set= setPatients
API.getPatients().then((res) => {
  set(res.data)
  console.log(res.data)
  })
},[]);
useEffect(() => {
 console.log(patients)
},[patients]);
  // make the api call to get the patients from the database using axios or fetch
  // in the callback for fetch set patients with the results array 
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
                  Risk level
                  </th>
                <th>
                  Alert
                  </th>
              </tr>
            </thead>
           
            
              <WaitingTable patients={patients} />
            
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Members;