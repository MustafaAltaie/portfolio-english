import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  tagTypes: [
    'profile',
    'educations',
    'experiences',
    'skills',
    'social',
    'documents',
    'projects',
  ],
  endpoints: () => ({}),
});