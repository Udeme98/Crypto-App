import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoApiHeaders = {
//   "X-RapidAPI-Key": "d39540efe9msh46bf83225ec09f4p118cf8jsn9e7c2b4bc5c4",
//   "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
// };
const cryptoApiHeaders = {
  "X-RapidAPI-Key": "d39540efe9msh46bf83225ec09f4p118cf8jsn9e7c2b4bc5c4",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

// const baseUrl = "https://coinranking1.p.rapidapi.com/exchanges";
const baseUrl = "https://coinranking1.p.rapidapi.com/coins";
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
