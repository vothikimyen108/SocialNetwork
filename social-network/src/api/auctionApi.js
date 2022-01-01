import axiosClientApp from "./axiosClientApp";

const auctionApi = {
  addAuction: (data, price) => {
    const url = `/auction_post/update-auction/${data.postid}/${data.userid}/`;
    return axiosClientApp.put(url, price);
  },
};
export default auctionApi;
