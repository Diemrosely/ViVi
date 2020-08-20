import React from "react";
import { useStoreContext } from '../utils/GlobalStore';
import Table from '../components/waitingtable';
import TableP from '../components/patienttable';

function Members(){
    const [state] = useStoreContext();
    const {email} = state;
    return <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <h2>Welcome {email}</h2>
        <Table/>
        <TableP/>
      </div>
    </div>
  </div>
}




export default Members;