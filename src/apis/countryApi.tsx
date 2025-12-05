import { env } from "@/env";
import axiosApiInstance from "./axios";

export const listCountries = () => {
  const url: any = new URL(`${env.BACKEND_URL}/countries`);
  return new Promise((resolve, reject) => {
    axiosApiInstance
      .get(url)
      .then((res) => {
        resolve(res.data);
      })
      .catch((reason) => {
        reject(reason);
      });
  });
};

export const getCountryByCode = (code: string) => {
  const url: any = new URL(`${env.BACKEND_URL}/countries/${code}`);
  return new Promise((resolve, reject) => {
    axiosApiInstance
      .get(url)
      .then((res) => {
        resolve(res.data);
      })
      .catch((reason) => {
        reject(reason);
      });
  });
};
