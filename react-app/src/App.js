
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
      taskName:newTask,
      completed:false
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

const completeTask = (id) =>{
  setTodoList(
    TodoList.map((task)=>{
      if(task.id==id){
        return {...task,completed : true};
      }
      else{
        return task;
      }

  }))
}

 return(
  <div className = "App">
    <div>TODOLIST</div>
    <div className="addTask">
      <input onChange={handleChange}/><br/>
      <button onClick={addTask}>addTask</button>
    </div>
    <div className = "list">
    {TodoList.map((task)=>{
     return(<Task 
      taskName = {task.taskName}
      id = {task.id} 
      completed = {task.completed}
      deleteTask = {deleteTask}
      completeTask = {completeTask}/>) ;
     }
  
    )}
    </div>




  </div>



);

}




export default App;
