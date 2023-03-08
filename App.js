import { Route, Router } from 'react-router-dom';
import './App.css';
import Delete from './delete';
import EmployeeGetPage from './get';
import Request from './post';
import TodoItem from './put';
// import TextField  from '@material-ui/core/TextField';

function App() {
  return (
    <div className="App">
      <Request/>
      <br/>
      <EmployeeGetPage/>
      <br/>
      <Delete/>
      <TodoItem/>
      <br/>
      
      

    </div>
  );
}

export default App;