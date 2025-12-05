import { store } from "@/stores";
import {
  startLoading,
  stopLoading,
} from "@/stores/features/globalLoadingSlice";
import axios from "axios";

export const createAxiosInstance = () => {
  const instance = axios.create();

  instance.interceptors.request.use(async (config) => {
    store.dispatch(startLoading());
    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      store.dispatch(stopLoading());
      return response;
    },
    async function (error) {
      store.dispatch(stopLoading());
      return Promise.reject(error);
    }
  );

  return instance;
};

const axiosApiInstance = createAxiosInstance();

export default axiosApiInstance;
