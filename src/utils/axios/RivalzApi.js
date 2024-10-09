import axiosClient from "./AxiosClient";

const RivalzApi = {
    getClientRunningInfo: async () => {
        const url = "/api-v1/system/client-runner-info";
        return axiosClient.get(url);
    },
    getSystemInfo: async () => {
        const url = "/api-v1/orbit-db/system-info";
        return axiosClient.get(url);
    }
};

export default RivalzApi;
