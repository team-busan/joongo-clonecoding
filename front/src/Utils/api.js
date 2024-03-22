import { axiosInstance, API_URL } from "../stores/API.js";

const getHomeProducts = async () => {
  const response = await axiosInstance
    .get(API_URL.HOME)
    .then((res) => res.data);
  return response;
};

export { getHomeProducts };
