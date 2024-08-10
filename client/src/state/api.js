import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// connect al backend api
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers"],
  // LOGICA DE LLAMADA A LAS APIS
  endpoints: (build) => ({
    // Obtener todos los usuarios POR UNA LLAMADA QUERY
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    // Obtener todos los productos POR UNA LLAMADA QUERY
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    // Obtener todos los clientes POR UNA LLAMADA QUERY de Costumers
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    })
  })
})

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } = api;