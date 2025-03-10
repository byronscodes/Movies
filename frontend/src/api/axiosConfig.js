import axios from 'axios';


export default axios.create({
  baseURL:'http://localhost:8080/',
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    "Access-Control-Allow-Origin": "*",
  }
});