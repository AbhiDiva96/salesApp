
import axios from "axios";

export const api = axios.create({
    baseURL: "https://salesapp-2.onrender.com/api/v1",
})