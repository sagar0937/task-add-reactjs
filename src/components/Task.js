import { FaTimes } from "react-icons/fa";

const Task = ({ task, taskDelete, toggleTask }) => {
  return (
    <div
      className={`task ${task.remainder ? "reminder" : ""}`}
      onDoubleClick={() => toggleTask(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          onClick={() => taskDelete(task.id)}
          style={{ color: "red", pointer: "cursor" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
