import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ExchangeKey } from './queyKey'
import { axiosGetAPI } from "../API";



const useExchcnage = (before: string, after: string, amountNum: number) => {
    let Key = Object.values(ExchangeKey)
    let beforeKey = Key.filter((el) => el === before)
    // let afterKey = Key.filter((el) => el === after)
    const { data, status } = useQuery([beforeKey], () => axiosGetAPI(before, after, amountNum))
    return { data, status }
}

export { useExchcnage }


