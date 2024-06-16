import { emptySplitApi } from "./apislice";

const userapi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    GetuserById: build.query({
      query: (id: string) => `general/users/${id}`,
      providesTags: ["users"],
    }),
    Getcustomers: build.query({
      query: () => `general/customers`,
    }),
    Getproducts: build.query({
      query: () => `client/products`,
      providesTags: ["products"],
    }),
  }),
});

export const {
  useGetuserByIdQuery,
  useGetproductsQuery,
  useGetcustomersQuery,
} = userapi;
