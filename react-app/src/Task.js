export const Task = (props)=>{
    return(
        <div style={{backgroundColor: props.completed ? "Green":"white"}}
        >
        <h1>{props.taskName}</h1>
        <button onClick={()=>props.completeTask(props.id)}>Complete</button> 
       <span> <button onClick={()=>props.deleteTask(props.id)} >X</button></span>
        </div>
      );
}