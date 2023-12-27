import { useState } from 'react'
import './App.css'
import Todo from './TasksLists/Todo';
import Ongoing from './TasksLists/Ongoing';
import Create from './TasksLists/Create';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Create tasks={tasks} setTasks={setTasks} ></Create>
      <Todo tasks={tasks} setTasks={setTasks} ></Todo>
      <Ongoing tasks={tasks} setTasks={setTasks} ></Ongoing>
    </>
  )
}

export default App
