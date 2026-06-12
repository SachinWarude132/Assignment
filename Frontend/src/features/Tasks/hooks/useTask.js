import { useContext } from "react";

import { TasksContext } from "../tasks.context";

import {
  createTask,
  updateTask,
  getTasks,
  deleteTask,
} from "../services/task.api";

export const useTask = () => {
  const {
    tasks,
    setTasks,
    loading,
    setLoading,
  } = useContext(TasksContext);

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const data = await getTasks();

      setTasks(data.tasks);

      return data.tasks;
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (title, description = "") => {
    try {
      setLoading(true);

      await createTask({
        title,
        description,
      });

      await fetchTasks();
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateTask = async (
  taskId,
  updatedData
) => {
  try {
    setLoading(true);

    await updateTask(
      taskId,
      updatedData
    );

    await fetchTasks();
  } finally {
    setLoading(false);
  }
};

  const handleDeleteTask = async (taskId) => {
    try {
      setLoading(true);

      await deleteTask(taskId);

      await fetchTasks();
    } finally {
      setLoading(false);
    }
  };

  return {
    tasks,
    loading,

    fetchTasks,
    handleCreateTask,
    handleUpdateTask,
    handleDeleteTask,
  };
};