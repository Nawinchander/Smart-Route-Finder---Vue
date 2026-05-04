import axios from "axios";

const API = "http://localhost:5000/route";

export const getRoute = async (start, end) => {
  const res = await axios.get(`${API}?start=${start}&end=${end}`);
  return res.data;
};

