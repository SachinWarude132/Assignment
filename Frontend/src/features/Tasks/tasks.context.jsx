import { createContext, useState } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        loading,
        setLoading,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};