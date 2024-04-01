import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Redux API calling Reducer: RTK Query API setup

const BASE_URL = "https://dummyjson.com";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // getBlogs: builder.query({
    //   query: (page = 1, limit = 10, category = '' ) =>
    //   `/products?limit=${limit}&page=${page}&category=${category}`,

    // }),
    getBlogs: builder.query({
      query: ({searchTerm, categoryTerm, limit}) => {
        if(searchTerm) {
          console.log("check console", `/products/search?q=${searchTerm}`)
          return `/products/search?q=${searchTerm}`;
        }
        if(categoryTerm){
          return `products/category/${categoryTerm}`;
        }
        return `/products?limit=${limit}`
      }
    }),
    getBlogbyCategory: builder.query({
      query: () => `/products/categories`,
    }),
  }),
});

export const {useGetBlogsQuery, useGetBlogbyCategoryQuery} = blogApi;