import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const searchApi = createApi({
  reducerPath: "YogaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: " https://api.github.com",
  }),
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: ({ userLogin }) => ({
        url: `/search/users?q=${userLogin}`,
      }),
    }),
  }),
});
export const { useGetUserInfoQuery } = searchApi;
