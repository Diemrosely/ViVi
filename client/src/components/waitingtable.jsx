import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
import '../App.css'; 

{/* Updated Table */}
class WaitingTable extends Component {
  
       state = { //state is by default an object
          students: [
             { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com',risklevel:'Red' },
             { id: 2, name: 'Ali', age: 19, email: 'ali@email.com', risklevel:'Green'},
             { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' ,risklevel:'Yellow'},
             { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' ,risklevel:'Red'}
          ]
       }
    
 
    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return this.state.students.map((student, index) => {
            const { id, name, age, email, risklevel } = student //destructuring
            var mailto = "mailto:" + email +  "?subject=Appointment%20Alert%20&body= The%20doctor%20is%20ready%20for%20you%20now!"
            return (
               
               <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{email}</td>
                  <td>{risklevel}</td>
                  <td> <a href= {mailto} className="btn btn-secondary" target = "_blank">Notify</a></td>
                  </tr>
            )
         })
    }
 }
 
 export default WaitingTable
 

