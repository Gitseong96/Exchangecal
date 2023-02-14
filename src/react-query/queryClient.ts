import { QueryClient } from "@tanstack/react-query";


export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 5 * 60 * 500,
            refetchInterval: 5
        }
    }
})