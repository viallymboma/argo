import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";
// const BASE_URL = "http://www.reboot-calabarfood.com:8000/api/";
// const BASE_URL = "http://194.163.155.58:8000/api/";
// const BASE_URL = "http://www.reboot-calabarfood.com/api/";
// const BASE_URL = "https://www.reboot-calabarfood.com/api/";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})