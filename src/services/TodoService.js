import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getTodos() {
    return apiClient.get("/todos");
  },
  getTodo(id) {
    return apiClient.get("/todo/" + id);
  }
};
