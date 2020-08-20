import React from 'react';
import Table from '../components/patienttable'

renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, name, age, email } = student //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>
       )
    })
 };

 render() {
    return (
       <div>
          <h1 id='title'>React Dynamic Table</h1>
          <table id='students'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 };