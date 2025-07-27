import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL_LINK;

export const getHospital = async (urlSLug: string) => {
  const res = await axios.get(`${backendUrl}/common/v1/homepage/${urlSLug}`);
  return res.data;
};
