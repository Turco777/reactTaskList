import React, { useState } from "react";
import '../style-sheets/TaskForm.css';
import { v4 as uuidv4} from 'uuid';


function TaskForm(props){
  
  const [input, setInput] = useState('');


  const handleChange = event => {
    setInput(event.target.value);
  };


  const handleSubmit = event => {
    event.preventDefault();


    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false   
    };

    props.onSubmit(newTask);
  };

  return (
    <form 
      className="task-form"
      onSubmit={handleSubmit}>
      <input 
        className="input-task"
        type="text" 
        placeholder="Write a task"
        name="text"
        onChange={handleChange}
      />
      <button className='task-button'>
        Add task 
      </button>
    </form>
  )
}

export default TaskForm;