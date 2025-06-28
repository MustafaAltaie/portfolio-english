import { api } from "../api/apiSlice";
import { ProjectType } from "../../types/Projects";

export const projectApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createProject: builder.mutation<ProjectType, Partial<ProjectType>>({
            query: (data) => ({ url: '/api/projects', method: 'POST', body: data }),
            invalidatesTags: ['projects']
        }),
        readProjects: builder.query<ProjectType[], void>({
            query: () => '/api/projects',
            providesTags: ['projects']
        }),
    }),
    overrideExisting: true
});

export const {
    useCreateProjectMutation,
    useReadProjectsQuery,
} = projectApi;