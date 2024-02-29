import axios from "axios";

export default axios.create({
  baseURL:
    process.env.REACT_APP_API ||
    "https://interview-js-fullstack-duytao.onrender.com/api/v1/products/",
});

