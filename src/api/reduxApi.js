import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const unitsApi = createApi({
        reducerPath: 'unitsApi',
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
            getUnitsById: builder.query({
                query: () => `get/unitById`
            })
        })
});

export const {useGetUnitsQuery, useGetUnitsByIdQuery} = unitsApi;


