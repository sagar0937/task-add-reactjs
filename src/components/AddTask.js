import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [remainder, setRemainder] = useState(false);

  //onsubmt
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please enter task");
      return;
    }
    onAdd({ text, day, remainder });

    setDay("");
    setText("");
    setRemainder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Add Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control  form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          placeholder='Set Reminder'
          value={remainder}
          checked={remainder}
          onChange={(e) => setRemainder(e.currentTarget.checked)}
        />
      </div>
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
