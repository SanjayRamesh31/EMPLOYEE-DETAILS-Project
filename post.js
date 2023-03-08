import axios from "axios";
import React, {Component} from 'react';
import './App.css';

class Request extends Component {
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
                    <div><h1 id="a">Posting EMPLOYEE DETAILS</h1></div>
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
export default Request;