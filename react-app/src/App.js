
import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
const [TodoList, setTodoList] = useState([]);
const [newTask,setnewTask] = useState("");
const handleChange = (event) => {
  setnewTask(event.target.value);

};

const addTask = ()=>{
     const task = {
      id : TodoList.length==0?1:TodoList[TodoList.length-1].id+1,
      taskName:newTask
     };
        setTodoList([...TodoList,task]);
        console.log(TodoList)
};

const deleteTask = (id)=>{
  const newTodoList = TodoList.filter((task)=>{
    return task.id!==id
  });
  setTodoList(newTodoList);
}

 return(
  <div className = "App">
    <div className="addTask">
      <input onChange={handleChange}/> 
      <button onClick={addTask}>addTask</button>
    </div>
    <div className = "list">
    {TodoList.map((task)=>{
     return(<Task 
      taskName = {task.taskName}
      id = {task.id} 
      deleteTask = {deleteTask}/>) ;
     }
  
    )}
    </div>




  </div>



);

}




export default App;
