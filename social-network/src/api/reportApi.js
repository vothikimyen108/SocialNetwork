import axiosClientApp from "./axiosClientApp";

const reportApi = {
  addReport: (data) => {
    const url = `/report/create-report/${data.report_id}/${data.type_report_id}/${data.object_report}/`;
    return axiosClientApp.get(url);
  },
};
export default reportApi;
