import React, { Component } from 'react';


class Table extends Component {
  
       state = { //state is by default an object
          students: [
             { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
             { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
             { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
             { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
          ]
       }
    
 
    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return this.state.students.map((student, index) => {
            const { id, name, age, email } = student //destructuring
            return (
               <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{email}</td>
                  <td><button>Notify</button></td>
               </tr>
            )
         })
    }
 }
 
 export default Table