import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: builder => ({
    getServices: builder.query({
      query: () => '/services',
      providesTags: ['Services']
    }),
    createService: builder.mutation({
      query: (service) => ({
        url: '/services',
        method: 'POST',
        body: service,
      }),
      invalidatesTags: ['Services']
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Services']
    }),
    updateService: builder.mutation({
      query: (service) => ({
        url: `/services/${service.id}`,
        method: 'PUT',
        body: service,
      }),
      invalidatesTags: ['Services']
    }),
  }),
  tagTypes: ['Services']
})

export const { useGetServicesQuery, useCreateServiceMutation, useDeleteServiceMutation, useUpdateServiceMutation } = apiSlice
