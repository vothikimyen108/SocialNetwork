import axiosClientApp from "./axiosClientApp";

const notificationApi = {
  getAllNoti: () => {
    const url = `/notification/`;
    return axiosClientApp.get(url);
  },
  updateNoti: (id) => {
    const url = `/notification/${id}/seen/`;
    return axiosClientApp.get(url);
  },
};
export default notificationApi;
