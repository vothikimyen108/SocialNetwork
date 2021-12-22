import axiosClientApp from "./axiosClientApp";

const tagApi = {
  getTags: () => {
    const url = `/tag/`;
    return axiosClientApp.get(url);
  },
};
export default tagApi;
