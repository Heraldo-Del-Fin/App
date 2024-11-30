import axios from "axios";

// Crear una instancia de Axios con la URL base del backend
const api = axios.create({
  baseURL: "http://localhost:3001/api", // URL del backend
});

export default api;
