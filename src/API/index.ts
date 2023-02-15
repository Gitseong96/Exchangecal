import axios from 'axios'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

type InfoRate = {
    rate: number;
}
type MotdProps = {
    msg: string;
    url: string;
}
type QueryProps = {
    from: string;
    to: string;
    amount: number;
}
interface Exchange {
    date: string;
    historical: boolean;
    info: InfoRate;
    motd: MotdProps;
    query: QueryProps;
    result: number;
    success: boolean;
}

const instanceExchage = axios.create({
    baseURL: "https://api.exchangerate.host/convert"
})

const responseBdoy = (res: AxiosResponse) => res.data;
const Req = {
    getExchange: (url: string) => instanceExchage.get<AxiosRequestConfig>(url).then(responseBdoy)
}


const Api = {
    getExchage: (before: string, after: string, amount: number): Promise<Exchange> =>
        Req.getExchange(`?from=${before}&to=${after}&amount=${amount}&places=3`)
}
const axiosGetAPI = async (before: string, after: string, amount: number) => {
    const data = await Api.getExchage(before, after, amount);
    return data
}

export {
    axiosGetAPI
};
export type { Exchange };
