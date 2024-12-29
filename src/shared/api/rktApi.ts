import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.geoapify.com/v1/geocode/search',
  }),
  endpoints: _ => ({}),
})

type RTKInject = ReturnType<typeof rtkApi.injectEndpoints>['injectEndpoints']
export type RTKEndpointBuilder = Parameters<RTKInject>[0]['endpoints'];
export type AppRTKEndpointBuilder = Parameters<RTKEndpointBuilder>[0];
