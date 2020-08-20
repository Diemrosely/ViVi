import React from "react";
import { useStoreContext } from '../utils/GlobalStore';
import TableQue from '../components/navbar';
import ViVi from '../components/jumbotron';
import Table from '../components/waitingtable';
import TableP from '../components/patienttable';

function Members(){
    const [state] = useStoreContext();
    const {email} = state;
    return <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <ViVi/>
        <h2>Welcome {email}</h2>

        <TableQue/>
         </div>
        <Table/>
        <TableP/>
      </div>
    </div>
  </div>
    
}

export default Members;