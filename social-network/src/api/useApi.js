import axiosClientApp from "./axiosClientApp";
const headers = {
  "content-type":
    "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
};
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
  signUp: (data) => {
    const url = `/users/`;
    console.log(data);
    return axiosClientApp.post(url, data, { headers: headers });
  },
  changeNewPass: (data) => {
    const url = `/sendpass/send_pass/?email=${data}`;
    return axiosClientApp.get(url);
  },
  updateUser: (data) => {
    const url = `/users/update-info-user/`;
    return axiosClientApp.patch(url, data, { headers: headers });
  },
};
export default userApi;
