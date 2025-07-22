import axios from "axios";

const APIWITHTOKEN = axios.create({
  baseURL: "http://localhost:4000/api/",
  headers: {
    Authorization: localStorage.getItem("token"),
    "Content-Types": "application/json", // send vayirako data ko formate
    Accept: "application/josn", // reciver huda kasto type ko fomate ko receive garna
  },
});

export default APIWITHTOKEN;
