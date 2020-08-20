import React from "react"
import { useStoreContext } from '../utils/GlobalStore';
import TableQue from '../components/navbar';
import ViVi from '../components/jumbotron';

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
    </div>
  </div>
    
}

export default Members;