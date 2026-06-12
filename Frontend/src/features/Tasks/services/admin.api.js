import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
});

export const getAllUsers = async () => {
  try {
    const res = await api.get("/admin/users");

    return res.data;
  } catch (err) {
    console.error(err);

    throw err;
  }
};