import { useState } from "react";

import { useTask } from "../hooks/useTask";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { handleCreateTask } = useTask();

  const submitHandler = async (e) => {
    e.preventDefault();

    await handleCreateTask(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <form className="create-task-form" onSubmit={submitHandler}>
      <div className="field-row">
        <input
          className="input-field"
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          required
        />
        <textarea
          className="input-field textarea-field"
          placeholder="Task description (optional)"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          rows="2"
        />
        <button className="button button--primary" type="submit">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default CreateTask;