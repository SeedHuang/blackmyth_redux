import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const unitsApi = createApi({
        reducerPath: 'unitApi',
        baseQuery: fetchBaseQuery({
            baseUrl: '//localhost:4000/',
            prepareHeaders: (headers = {}, { getState }) => {
                return headers;
            }
        }),
        endpoints: builder => ({
            getUnits: builder.query({
                query: () => `get/units`
            }),
            getUnitsByid: builder.query({
                query: () => `get/unitById`
            })
        })
});

console.log(unitsApi)
export default {};


