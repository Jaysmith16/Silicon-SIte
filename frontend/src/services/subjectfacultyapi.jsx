import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../pages/utils";

export const subjectfacultyApi = createApi({
  reducerPath: "subjectfacultyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),

  endpoints: (builder) => ({
    getFacultyBySem: builder.query({
      query: ({ access_token, sem }) => {
        return {
          url: `faculty/?sem=${sem}`,
          method: "GET",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),

    addFacultyData: builder.mutation({
      query: ({ faculty_data, access_token }) => {
        return {
          url: "faculty/",
          method: "POST",
          body: faculty_data,
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    updateFacultyData: builder.mutation({
      query: ({ faculty_data, access_token, id }) => {
        return {
          url: `faculty/?id=${id}`,
          method: "PUT",
          body: faculty_data,
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    deleteFacultyData: builder.mutation({
      query: ({ access_token, id }) => {
        return {
          url: `faculty/?id=${id}`,
          method: "DELETE",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    getSubjectBySem: builder.query({
      query: ({ access_token, sem }) => {
        return {
          url: `subject/?sem=${sem}`,
          method: "GET",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    getSingleSubjectById: builder.query({
      query: ({ access_token, id }) => {
        return {
          url: `subject/?id=${id}`,
          method: "GET",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    addSubjectData: builder.mutation({
      query: ({ subject_data, access_token }) => {
        return {
          url: "subject/",
          method: "POST",
          body: subject_data,
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    updateSubjectData: builder.mutation({
      query: ({ subject_data, access_token, id }) => {
        return {
          url: `subject/?id=${id}`,
          method: "PUT",
          body: subject_data,
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    deleteSubjectData: builder.mutation({
      query: ({ access_token, id }) => {
        return {
          url: `subject/?id=${id}`,
          method: "DELETE",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useGetFacultyBySemQuery,
  useAddFacultyDataMutation,
  useUpdateFacultyDataMutation,
  useDeleteFacultyDataMutation,
  useGetSubjectBySemQuery,
  useAddSubjectDataMutation,
  useUpdateSubjectDataMutation,
  useDeleteSubjectDataMutation,
  useLazyGetSingleSubjectByIdQuery,
} = subjectfacultyApi;
