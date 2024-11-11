import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: builder => ({
    getServices: builder.query({
      query: () => '/services'
    })
  })
})

export const { useGetServicesQuery } = apiSlice
