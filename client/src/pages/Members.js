import React from "react";
import { useStoreContext } from '../utils/GlobalStore';
import NavBar from '../components/navbar';
import AppJumbo from '../components/jumbotron';
import Table from '../components/waitingtable';
import '../components/waitingtable.css';

function Members() {
  const [state] = useStoreContext();
  const { email } = state;
  return(
  <div className="container">
    <div className="row">
      <div>
        <div className="row">
          {/* <div className="col"></div> */}
          <div className="col text-center">
            <NavBar />
          </div>
          <div className="col text-right">
            <span>Welcome {email}</span>
          </div>
        </div>
        {/* <div className="row mx-0 px-0">
        <div className="col text-center mx-0 px-0"> */}
        <AppJumbo />
        {/* </div>
      </div>                   */}
        <div className="row">
          <div className="col text-center mx-0 px-0">
            <table> <Table /></table>
          </div>
        </div>
      </div>
      {/* <div className="col-sm-2"></div> */}
    </div>
  </div>
  )}

export default Members;