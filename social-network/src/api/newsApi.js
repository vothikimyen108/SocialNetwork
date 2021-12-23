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

  addPost: (data) => {
    const url = `/post/create-post/`;
    console.log(data);
    return axiosClientApp.post(url, data, { headers: headers });
  },
};
export default newsApi;
