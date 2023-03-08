import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

const Delete = () => {
  const [id, setId] = useState('');
   

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/delete?id=${id}`)
      .then(response => {
        alert('Detail is deleted successfully!');
        setId('');
         
      })
      .catch(error => {
        alert('Failed to delete the details.');
        console.error(error);
      });
  };

  return (
    <div className='by'>
      <h1>Delete</h1>
      <form>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" value={id} onChange={event => setId(event.target.value)}
          />
        </div>
          
       <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default Delete;