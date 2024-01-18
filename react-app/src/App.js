
import './App.css';
import { useState } from 'react';

function App() {
const [TodoList, setTodoList] = useState([]);
const [newTask,setnewTask] = useState("");
const handleChange = (event) => {
  setnewTask(event.target.value);

};

const addTask = ()=>{
  const addTaskToList = [...TodoList,newTask];
        setTodoList(addTaskToList);
};

 return(
  <div className = "App">
    <div className="addTask">
      <input onChange={handleChange}/> 
      <button onClick={addTask}>addTask</button>
    </div>
    <div className = "list">
    {TodoList.map((task)=>{
      return(
        <h1>{task}</h1>
      );}

    )}
    </div>




  </div>



);

}




export default App;
