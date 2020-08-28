import React from 'react';
import { Row, Col, Form} from 'react-bootstrap';
<<<<<<< HEAD

=======
>>>>>>> 33c97851bc35f20e8833bd21fddf4e6111a956f6

class PatientForm extends React.Component {
  
    state = {
            FirstName:'',
            LastName:'',
            email:'',
            riskLevel:'',  
            questions:[],
            Patient:[],
      }
    

    onInputChange = (event, Field,) => {
      event.preventDefault() 
        let newInput = event.target.value;
        // let radio = event.target.value;
        // let questions = this.state.questions;
        this.setState({[Field]: newInput })
      //  this.setState({questions : radio})
      //  this.setState({riskLevel: radio})
       }  
    
    
       onRadioChange = (event) => {
          let radio = event.target.value;
          let questions = this.state.questions
          this.setState({riskLevel: radio})
          this.setState({questions : questions})
    }

     riskFactor = () =>{
        let count = 0;
        let aRisk = '';
        let answers = [];
    for ( let i = 0; i < this.state.questions.length; i++) {
        if (this.state.questions[i] === true) {
          count++;
         answers.push(this.state.questions[i])
          aRisk.push(this.state.riskLevel)
        }
      if (count <= 2) {
        this.state.riskLevel = 1
      } else if (count > 2 || 4 <= count) {
        this.state.riskLevel = 2
      } else if (count > 4) {
        this.state.riskLevel = 3
      }  
      
     
      };
      // this.setState({riskLevel : count})
      console.log(this.state.riskLevel)
    }
 

      onSearchSubmit = (event) => {
        event.preventDefault();
        let userInput = this.state.riskLevel;
       
        console.log(this.state.riskLevel);
        let searchResults = [];
        for(let i = 0; i<this.state.patient.length; i++) {
if (this.state.patient[i].FirstName === userInput && this.state.patient[i].LastName === userInput && this.state.patient[i].email === userInput && this.state.patient[i].riskLevel);
        searchResults.push(this.state.patient)
      }

      }

 


    
      
    
    

   
    // componentDidMount = () => {
    //   axios.post("/api/new").then(function (data) {
    //     return patient;
    //   })
    // }
    render() {
  
    return (
        <div>
            <h2>COVID-19 SCREENING QUESTIONNAIRE</h2>
            <Form style={{ backgroundColor: "whitesmoke" }}>
                <fieldset style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                     <Form.Label column sm={2}>
                                 First Name
                     </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="FirstName" type="Name" placeholder="First Name"  value={this.state.FirstName} onChange={(event)=>this.onInputChange(event, "FirstName")}/>
                      </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                     <Form.Label column sm={2}>
                                 Last Name
                     </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="LastName" type="LastName" placeholder="Last Name" value={this.state.LastName} onChange={(event)=>this.onInputChange(event, "LastName")} />
                      </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                     <Form.Label column sm={2}>
                                 Email
                     </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="email" type="email" placeholder="Email" value={this.state.email} onChange={(changeEvent)=>this.onInputChange(changeEvent, "email")} />
                      </Col>
                </Form.Group>
                    <p style={{ fontSize: "20px" }}>Over the past 14 days,have you had any of these	symptoms?</p>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column md={5}>
                            1. Dry Cough ?
                 </Form.Label>
                 <Col xs="auto" className="my-1">
                           <Form.Check
                                type="radio"
                                name="name1"
                                id="radio1"
                                label="Yes"
                                value={true}
                                 onClick={this.riskFactor}
                                onChange={this.onRadioChange}
                               
                               
                                 custom
                              />
                           </Col>
                <Col xs="auto" className="my-1">  
                              <Form.Check
                                type="radio"
                                name="name1"
                                id="radio2"
                                label="No"
                                value={false}
                                onClick={this.riskFactor}
                                onChange={this.onRadioChange}
                                
                               
                                    custom
                              />
                           </Col> 
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column md={5}>
                            2.Shortness of breath ?
                 </Form.Label>
                 <Col xs="auto" className="my-2">
                           <Form.Check
                                type="radio"
                                name="name2"
                                id="Radio3"  
                                label="Yes"
                                // onChange={this.onRadioChange}
                                // onClick={this.riskFactor}
                                custom
                              />
                    </Col>
                <Col xs="auto" className="my-2">
                                 <Form.Check
                               type="radio"
                               name="name2"
                               id="Radio4"
                              value={false}     
                               label="No"
                              // onChange={this.onRadioChange}
                              // onClick={this.riskFactor}
                                custom
                                      />
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column md={5}>
                            3.Muscle Aches ?
                 </Form.Label>
                 <Col xs="auto" className="my-1">
                           <Form.Check
                               type="radio"
                               name="name3"
                               id="Radio5"
                              value={true} 
                               label="Yes"
                               onChange={this.onRadioChange}
                               onClick={this.riskFactor}
                               custom
                              />
                            </Col>
                            <Col xs="auto" className="my-1">
                            <Form.Check
                                type="radio"
                                name="name3"
                                id="radio6"
                                value={false}                 
                                label="No"
                                // onChange={(event)=>this.onRadioChange(event, "false")}
                                // onClick={this.riskFactor}
                                 custom
                              />
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column md={5}>
                            4.Sore Throat ?
                 </Form.Label>
                 <Col xs="auto" className="my-1">
                           <Form.Check
                                 type="radio"
                                 name="name4"
                                value="Radios7" 
                                 label="Yes"
                                //  checked={this.state.DryCough === "Radios1"}
                                //  onChange={this.onInputChange}
                                  custom
                              />
                            </Col>
                            <Col xs="auto" className="my-1">
                            <Form.Check
                                 type="radio"
                                 name="name4"
                                value="Radios8"
                                 label="No"
                                //  checked={this.state.DryCough === "Radios1"}
                                //  onChange={this.onInputChange}
                                  custom
                              />
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column md={5}>
                            5.Headache ?
                 </Form.Label>
                 <Col xs="auto" className="my-1">
                           <Form.Check
                                type="radio"
                                name="name5"
                               value="Radios9"     
                                label="Yes"
                                // checked={this.state.DryCough === "Radios1"}
                                // onChange={this.onInputChange}
                                 custom
                              />
                            </Col>
                            <Col xs="auto" className="my-1">
                            <Form.Check
                                 type="radio"
                                 name="name5"
                                value="Radios10"        
                                 label="no"
                                //  checked={this.state.DryCough === "Radios1"}
                                //  onChange={this.onInputChange}
                                  custom
                              />
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column md={5}>
                            6.Fatigue ?
                 </Form.Label>
                 <Col xs="auto" className="my-1">
                           <Form.Check
                                 type="radio"
                                 name="name6"
                                value="Radios11"       
                                 label="Yes"
                                //  checked={this.state.DryCough === "Radios1"}
                                //  onChange={this.onInputChange}
                                  custom
                              />
                            </Col>
                            <Col xs="auto" className="my-1">
                                <Form.Check
                                 type="radio"
                                 name="name6"
                                value="Radios12"     
                                 label="No"
                                //  checked={this.state.DryCough === "Radios1"}
                                //  onChange={this.onInputChange}
                                  custom
                              />
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column md={5}>
                            7.Have you had any close contact with anyone with COVID-19("Close contact is defined as less than 6ft distance for more than 10min") ?
                 </Form.Label>
                 <Col xs="auto" className="my-1">
                           <Form.Check
                                 type="radio"
                                 name="name7"
                                value="Radios13"      
                                 label="Yes"
                                //  checked={this.state.DryCough === "Radios1"}
                                //  onChange={this.onInputChange}
                                  custom
                              />
                            </Col>
                            <Col xs="auto" className="my-1">
                            <Form.Check
                                 type="radio"
                                 name="name7"
                                value="Radios14"     
                                 label="No"
                                //  checked={this.state.DryCough === "Radios1"}
                                //  onChange={this.onInputChange}
                                  custom
                              />
                            </Col>
                    </Form.Group>
                </fieldset>
            </Form>
        </div>
    );
}
}
export default PatientForm;











