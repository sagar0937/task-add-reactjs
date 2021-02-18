import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

export default function App() {
  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: "doc appoiment",
    //   day: "feb 5th at 2.30pm",
    //   remainder: true,
    // },
    // {
    //   id: 2,
    //   text: "advocate appoiment",
    //   day: "feb 6th at 4.30pm",
    //   remainder: true,
    // },
    // {
    //   id: 3,
    //   text: "med appoiment",
    //   day: "feb 5th at 5.30pm",
    //   remainder: false,
    // },
  ]);

  const [showAddTask, setShowAddTask] = useState(true);

  //load task
  useEffect(() => {
    const getTask = async () => {
      const getAllTask = await fetchTasks();
      setTasks(getAllTask);
    };
    getTask();
  }, []);

  //fetch tsk
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //delete task
  const onDeleteTask = async (id) => {
    //console.log("delete", id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((item) => item.id !== id));
  };

  //toggle highilter
  const toggleRemainder = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, remainder: !item.remainder } : item
      )
    );
  };

  //add task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task };

    // setTasks([...tasks, newTask]);
  };

  return (
    <div className='App'>
      <Header
        title='Task Header'
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={onDeleteTask}
          toggleTask={toggleRemainder}
        />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}
//export default App;
