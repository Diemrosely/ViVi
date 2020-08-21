import React, { Component } from "react";
import Modal from '../components/Modal/index';

class Landing extends Component {
    render() {
      return (
        <div className="App">
            <Modal>
              <div 
                  style={{color:'black'}}
              >
                The Best Has Happened To ME
              </div>
            </Modal>
        </div>
      );
    }
  }
  
  export default Landing;