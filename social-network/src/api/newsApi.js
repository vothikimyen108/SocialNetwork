import axiosClientApp from "./axiosClientApp";
const headers = {
  "content-type":
    "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
};
const newsApi = {
  getListApi: (data) => {
    const url = `/post/?page=${data}`;
    return axiosClientApp.get(url);
  },
};
export default newsApi;
