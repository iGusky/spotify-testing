import api from "../../../../config/axios.ts";
import {AxiosError, AxiosResponse} from "axios";

export default {
    search: (artistQuery: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            api.get(`search?type=artist&q=${artistQuery}`)
                .then((response: AxiosResponse) => { resolve(response.data) })
                .catch((error: AxiosError) => { reject(error) })
        })
    }
}