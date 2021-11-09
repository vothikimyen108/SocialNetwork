import axiosClientApp from "./axiosClientApp";
const userApi = {
  getAuthInfo: () => {
    const url = `/oauth2-info/`;
    return axiosClientApp.get(url);
  },
  login: (data) => {
    const url = `/o/token/`;
    return axiosClientApp.post(url, data);
  },
  getUser: () => {
    const url = `/users/current-user/`;
    return axiosClientApp.get(url);
  },
};
export default userApi;
