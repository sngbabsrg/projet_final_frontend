// src/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://projet-final-backend.onrender.com", // ✅ BONNE URL
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
