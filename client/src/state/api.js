import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// connect al backend api
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User"],
  // LOGICA DE LLAMADA A LAS APIS
  endpoints: (build) => ({
    // Obtener todos los usuarios POR UNA LLAMADA QUERY
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
  })
})

export const { useGetUserQuery } = api;