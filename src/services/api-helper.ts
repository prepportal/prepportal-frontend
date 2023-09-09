import axios, { AxiosRequestConfig } from "axios";


interface FetchResponse<T> {
  hasError: boolean;
  statusCode: number;
  message: string[];
  response: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://prepportal-backend-production.up.railway.app/api/",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }
}

export default APIClient;