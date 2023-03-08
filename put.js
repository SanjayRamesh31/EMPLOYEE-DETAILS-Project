import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import './App.css';

// function TodoItem() {
//     const [todo, setTodo] = useState({
//         id:'',
//         employmentTYPE:'',
//         name:'',
//         salary:'',
//         yearsOfWorking:'',
//     });

//     const handleChange = (event) => {
//         setTodo({ ...todo, [event.target.name]: event.target.value });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.put(`http://localhost:8080/put`, todo)
//             .then((res) => {
//                 console.log(res.data);
//                 alert('Update Successful!');
//                 setTodo({ id:'', employmentTYPE:'', name:'',salary:'', yearsOfWorking:''});
//             })
//             .catch(error => {
//                 alert('Update Failed.');
//                 console.error(error);
//             });
//     };
//     return (
//         <div className="body">
//             <div><h1 id="a">Update EMPLOYEE DETAILS</h1></div>
//             <form className="hello" onSubmit={handleSubmit}>
//                 <br/>
//                 <div id="d">
//                     <div id="b">Id : </div>
//                     <input name="id" type="text" id="c" value={todo.id} onChange={handleChange}/>
//                 </div>
//                 <br/>
//                 <div id="d">
//                     <div id="b">EmploymentType : </div>
//                     <input name="employmentTYPE" type="text" id="c" value={todo.employmentTYPE} onChange={handleChange}/>
//                 </div>
//                 <br/>
//                 <div id="d">
//                     <div id="b">Name : </div>
//                     <input name="name" type="text" id="c" value={todo.name} onChange={handleChange}/>
//                 </div>
//                 <br/>
//                 <div id="d">
//                     <div id="b">Salary : </div>
//                     <input name="salary" type="tel" id="c" value={todo.salary} onChange={handleChange}/>
//                 </div>
//                 <br/>
//                 <div id="d">
//                     <div id="b">Years Of Working : </div>
//                     <input name="yearsOfWorking" id="c" value={todo.yearsOfWorking} onChange={handleChange}/>
//                 </div>
//                 <br/>
//                 <button type="submit" onClick="window.location.reload();">Update Request</button>
//                 <br/>
//             </form>
//         </div>
//     );

class TodoItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
            id:'',
            EmploymentTYPE:'',
            name:'',
            salary:'',
            yearsOfWorking:'',
      };
    }
  
    handleidChange=(event)=>{
        this.setState({id: event.target.value});
    };
    handleEmploymentTypeChange=(event)=>{
        this.setState({EmploymentTYPE: event.target.value});
    };
    handlenameChange=(event)=>{
        this.setState({name: event.target.value});
    };
    handlesalaryChange=(event)=>{
        this.setState({salary: event.target.value});
    };
    handleyearsOfWorkingChange=(event)=>{
        this.setState({yearsOfWorking: event.target.value});
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: this.state.id,
            employmentTYPE: this.state.EmploymentTYPE,
            name: this.state.name,
            salary: this.state.salary,
            yearsOfWorking: this.state.yearsOfWorking,
        };
        axios.post('http://localhost:8080/post', data)
    };
    render(){
        return (
            <div className="by">
                    <div><h1 id="a">Update</h1></div>
                <form className="hello" onSubmit={this.handleSubmit}>
                    <br/>
                    <div id="d">
                        <div id="b">Id : </div>
                        <input type="text" id="c"  value={this.state.id} onChange={this.handleidChange}/>
                    </div>
                    <div id="d">
                        <div id="b">EmploymentType: </div>
                        <input id="c" type="text" value={this.state.employmentTYPE} onChange={this.handleEmploymentTypeChange}/>
                    </div>
                    <div id="d">
                        <div id="b">Name : </div>
                        <input type="tel" id="c" value={this.state.name} onChange={this.handlenameChange}/>
                    </div>
                    <div id="d">
                        <div id="b">Salary : </div>
                        <input id="c" value={this.state.salary} onChange={this.handlesalaryChange}/>
                    </div>
                    <div id="d">
                        <div id="b">Years Of Working : </div>
                        <input id="c" value={this.state.yearsOfWorking} onChange={this.handleyearsOfWorkingChange}/>
                    </div>
                    
                    <br/> 
                    <button type="submit">Submit</button>
                     {/* <button type="reset">Reset</button>  */}
                    <br/>
                    <br/>
                </form>
            </div>
        );
    }
}
export default TodoItem;