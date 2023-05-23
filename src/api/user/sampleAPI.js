import axiosClient from "../axiosClient";

const sampleAPI = {
  add: (reqBody) => {
    const url = `user/test`;
    return axiosClient.post(url, reqBody);
  },

  get: () => {
    const url = `user/test`;
    return axiosClient.get(url);
  },
};

export default sampleAPI;
