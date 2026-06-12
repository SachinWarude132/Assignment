import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
});

export const createTask = async (taskData) => {
  const res = await api.post("/task", taskData);
  return res.data;
};

export const getTasks = async () => {
  const res = await api.get("/task");
  return res.data;
};

export const updateTask = async (taskId, data) => {
  const res = await api.put(`/task/${taskId}`, data);
  return res.data;
};

export const deleteTask = async (taskId) => {
  const res = await api.delete(`/task/${taskId}`);
  return res.data;
};