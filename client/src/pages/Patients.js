import React from  'react';
import Exposure from './components/form';
import { useStoreContext } from '../utils/GlobalStore';
import ViVi from '../components/jumbotron';

function Patient() {
    const [state] = useStoreContext();
    const {email} = state;
    return( <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
          <ViVi/>
        <h2>Welcome {email}</h2>
        <Exposure/>
         </div>
    </div>
  </div>
)
}

export default Patient;

