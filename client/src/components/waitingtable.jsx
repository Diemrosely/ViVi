import React from 'react';
// import Button from 'react-bootstrap/Button';
import './waitingtable.css';


class WaitingTable extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         patients: props.patients || []
      }
   }

   render() {
      //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      let riskColor = {
         1: "SpringGreen3",
         2: "yellow1",
         3: "red3"
      }
      // riskColor[risklevel]


      // const { id, name, age, email, riskLevel } = this.state.patients //destructuring
      console.log(this.state)

      return (<tbody>

         {this.props.patients && this.props.patients.map(patient => {
                let { id, first, last, age, email, riskLevel } = patient
                var mailto = "mailto:" + email + "?subject=Appointment%20Alert%20&body= The%20doctor%20is%20ready%20for%20you%20now!"
                console.log( age)
            return <tr key={id} className= {`${riskColor[riskLevel]}Table`}>
               <td>{id}</td>
               <td>{`${first} ${last}`}</td>
               <td>{age}</td>
               <td>{email}</td>
               <td style= {{backgroundColor: riskColor[riskLevel] }}>{riskLevel}</td>
               <td> <a href={mailto} className="btn btn-secondary tblBtn" target="_blank">Notify</a></td>
            </tr>
         })}
      </tbody>)
   };
}
export default WaitingTable


