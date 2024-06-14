import { emptySplitApi } from "./apislice";

const userapi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    GetuserById: build.query({
      query: (id: string) => `general/users/${id}`,
    }),
  }),
});

export const { useGetuserByIdQuery } = userapi;
