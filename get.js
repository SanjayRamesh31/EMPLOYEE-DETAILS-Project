import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

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
        <div className="body">
            <div>
                <h1>
                    Getting EMPLOYEE DETAILS
                </h1>
            </div>
            <div className="table">
                <table border={2}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>EmploymentType</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Years Of Working</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.map(quote =>(
                            <tr key={quote.id}>
                            <td>{quote.id}</td>
                            <td>{quote.employmentTYPE}</td>
                            <td>{quote.name}</td>
                            <td>{quote.salary}</td>
                            <td>{quote.yearsOfWorking}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default EmployeeGetPage;