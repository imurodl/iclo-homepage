import axios from "axios";

export const getHospital = async (urlSLug: string) => {
  const res = await axios.get(
    `https://back-staging.homeden.kr/common/v1/homepage/${urlSLug}`
  );
  return res.data;
};
