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
    return axiosClientApp.post(url, data, { headers: headers });
  },

  addAuction: (data) => {
    const url = `/auction_post/create-auction-post/`;
    return axiosClientApp.post(url, data, { headers: headers });
  },
  getPost: (data) => {
    const url = `/post/${data}/get-post/`;
    return axiosClientApp.get(url);
  },

  likePost:(data) => {
    const url = `/post/${data}/like-or-unlike/`;
    return axiosClientApp.post(url);
  },

  addComment:(id,data) => {
    const url = `/post/${id}/add-comment/`;
    return axiosClientApp.post(url,data);
  }
};
export default newsApi;
