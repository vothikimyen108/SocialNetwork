import axiosClient from "./axiosClient";
const ProvincesApi = {
  getAll: (params) => {
    const url = `/p/`;
    return axiosClient.get(url);
  },
  getDistricts: (code) => {
    const url = `/p/${code}?depth=2`;
    return axiosClient.get(url);
  },
  getwards: (code) => {
    const url = `/d/${code}?depth=2`;
    return axiosClient.get(url);
  },
};
export default ProvincesApi;
