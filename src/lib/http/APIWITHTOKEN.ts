import axios from "axios";

const APIWITHTOKEN = axios.create({
  baseURL: "http://localhost:4000/api/",
  headers: {
    Authorization:
      typeof window !== "undefined" ? localStorage.getItem("token") : null,
    "Content-Type": "application/json", // send vayirako data ko formate
    Accept: "application/json", // reciver huda kasto type ko fomate ko receive garna
  },
});

export default APIWITHTOKEN;
