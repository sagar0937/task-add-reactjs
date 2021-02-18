import Task from "./Task";

const Tasks = ({ tasks, onDelete, toggleTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          taskDelete={onDelete}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
