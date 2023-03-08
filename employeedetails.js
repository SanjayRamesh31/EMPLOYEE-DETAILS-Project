// import React, {Component} from "react";
// //import './css/home.css';
// import axios from "axios";

// class Login extends Component() {
//     constructor(){
//         this.state={
//           id:'', 
//           name:'',
//           age:'',
//           gender:'',
//           employmenttype:'',
//           target_completed:'',
//           credit_score:'',
//           salary:'',
//           years_of_working:'',
//           native:'',
//         };
//     }
//     handleid=(event)=>{
//         this.setState({id: event.target.value});
//     };
//     handlename=(event)=>{
//         this.setState({name: event.target.value});
//     };
//     handleage=(event)=>{
//         this.setState({age: event.target.value});
//     };
//     handlegender=(event)=>{
//         this.setState({gender: event.target.value});
//     };
//     handleemploymenttype=(event)=>{
//         this.setState({employmenttype: event.target.value});
//     };
//     handletarget_completed=(event)=>{
//         this.setState({target_completed: event.target.value});
//     };
//     handlecredit_score=(event)=>{
//         this.setState({credit_score: event.target.value});
//     };
//     handlesalary=(event)=>{
//         this.setState({salary: event.target.value});
//     };
//     handleyears_of_working=(event)=>{
//         this.setState({years_of_working: event.target.value});
//     };
//     handlenative=(event)=>{
//         this.setState({native: event.target.value});
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const data = {
//             id: this.state.id,
//             name: this.state.name,
//             age: this.state.age,
//             gender: this.state.gender,
//             employmentType: this.state.employmenttype,
//             target_completed: this.state.target_completed,
//             credit_score: this.state.credit_score,
//             salary: this.state.salary,
//             years_of_working: this.state.years_of_working,
//             native: this.state.native,
//         };
//         axios.post('http://localhost:8080/post', data)
//     };
//     render(){
//         return (
//             <div className="container">
//                 <form className="hello" onSubmit={this.handleSubmit}>
//                     <div><h1 id="a">Employee Details</h1></div>
//                     <br/>
//                     <div id="d">
//                         <div id="b">id : </div>
//                         <input type="text" id="c" value={this.state.id} onChange={this.handleid}></input>
//                     </div>
//                     <div id="d">
//                         <div id="b">name : </div>
//                         <input type="email" id="c" value={this.state.name} onChange={this.handlename}></input>
//                     </div>
//                     <div id="d">
//                         <div id="b">age : </div>
//                         <input type="tel" id="c" value={this.state.age} onChange={this.handleage}></input>
//                     </div>
//                     <div id="d">
//                         <div id="b">gender : </div>
//                         <input type="tel" id="c" value={this.state.gender} onChange={this.handlegender}></input>
//                     </div>
//                     <div id="d">
//                         <div id="b">employmenttype : </div>
//                         <input type="tel" id="c" value={this.state.employmenttype} onChange={this.handleemploymenttype}></input>
//                     </div>
//                     <div id="d">
//                         <div id="b">target_completed : </div>
//                         <input type="tel" id="c" value={this.state.target_completed} onChange={this.handletarget_completed}></input>
//                     </div>
//                     <div id="d">
//                         <div id="b">credit_score : </div>
//                         <input type="tel" id="c" value={this.state.credit_score} onChange={this.handlecredit_score}></input>
//                     </div>
//                     <div id="d">
//                         <div id="b">salary : </div>
//                         <input type="tel" id="c" value={this.state.salary} onChange={this.handlesalary}></input>
//                     </div>
//                     <div id="d">
//                         <div id="b">years_of_working : </div>
//                         <input type="tel" id="c" value={this.state.years_of_working} onChange={this.handleyears_of_working}></input>
//                     </div>
//                     <div id="d">
//                         <div id="b">native : </div>
//                         <input type="tel" id="c" value={this.state.native} onChange={this.handlenative}></input>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }
// export default Login;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function EmployeeGetPage() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8080/get")
//       .then((response) => {
//         setEmployees(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="employee-get-page">
//       <h1>Employee List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
           
//             <th>Employment Type</th>
//             <th>Salary</th>
            
//             <th>Years of Working</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => (
//             <tr key={employee.Id}>
//               <td>{employee.Id}</td>
//               <td>{employee.Name}</td>
              
             
//               <td>{employee.EmploymentTYPE}</td>
//               <td>{employee.Salary}</td>
             
//               <td>{employee.YearsOfWorking}</td>
             
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EmployeeGetPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeGetPage = () => {
  const [employee, setemployee] = useState([]);

  useEffect(() => {
    const fetchemployee = async () => {
      const response = await axios.get('http://localhost:8080/get');
      setemployee(response.data);
    };
    fetchemployee();
  }, []);

  return (
    <div>
      
      {employee.map(employee => (
        <div key={employee.id}>
          {employee.Id}
          {employee.EmploymentTYPE}
          {employee.Name}
          {employee.Salary}
          {employee.YearsOfWorking}
        </div>
      ))}
    </div>
  );
};

export default EmployeeGetPage