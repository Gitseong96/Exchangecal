import axios from 'axios'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';




const instanceExchage = axios.create({
    baseURL: "https://api.exchangerate.host/convert"
})

const responseBdoy = (res: AxiosResponse) => res.data;
const Req = {
    getExchange: (url: string) => instanceExchage.get<AxiosRequestConfig>(url).then(responseBdoy)
}


const Api = {
    getExchage: (a: string, b: string, c: number): Promise<any> =>
        Req.getExchange(`?from=${a}&to=${b}&amount=${c}&places=3`)
}
const axiosGetAPI = async (a: string, b: string, c: number) => {
    const data = await Api.getExchage(a, b, c);
    return data
}

export {
    axiosGetAPI
}