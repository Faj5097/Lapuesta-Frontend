import axios from "axios";

export default axios.create({
  baseURL: "https://protected-reaches-62397.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});
