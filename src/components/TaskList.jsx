import React, { useState } from "react";
import TaskForm from "./TaskForm.jsx"; 
import Task from "./Task.jsx";
import '../style-sheets/TaskList.css';


function TaskList() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    console.log(task);
    if(task.text.trim()){
      task.text = task.text.trim();
      const tasksUpdated = [task, ...tasks];
      setTasks(tasksUpdated);
    }
  };

  const removeTask = id => {
    const tasksUpdated = tasks.filter(task => task.id !== id);
    setTasks(tasksUpdated);
  };

  const completeTask = id => {
    const tasksUpdated = tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(tasksUpdated);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} /> 
      <div className="tasklist-container">
        {
          tasks.map((task) => 
            <Task 
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              completeTask={completeTask}
              removeTask={removeTask}
            />
          )
        }
      </div>
    </>
  );
}

export default TaskList;