import { api } from "../api/apiSlice";
import { FSkill } from "../../types/Skills";

export const skillsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        // frontend
        createFrontendSkill: builder.mutation<FSkill, Partial<FSkill>>({
            query: (data) => ({ url: '/api/skills/frontend', method: 'POST', body: data }),
            invalidatesTags: ['skills']
        }),
        uploadFrontendSkillIcon: builder.mutation<void, FormData>({
            query: (formData) => ({ url: '/api/skills/frontend/images', method: 'POST', body: formData }),
            invalidatesTags: ['skills']
        }),
        readFrontendSkills: builder.query<FSkill[], void>({
            query: () => '/api/skills/frontend',
            providesTags: ['skills']
        }),
        updateFrontendSkill: builder.mutation<FSkill, { id: string, data: Partial<FSkill> }>({
            query: ({ id, data }) => ({ url: `/api/skills/frontend/${id}`, method: 'PATCH', body: data }),
            invalidatesTags: ['skills']
        }),
        changeFrontendSkillIcon: builder.mutation<void, { formData: FormData, oldImage: string | undefined }>({
            query: ({ formData, oldImage }) => ({ url: `/api/skills/frontend/updateImage/${oldImage}`, method: 'POST', body: formData }),
            invalidatesTags: ['educations']
        }),
        // backend
        createBackendSkill: builder.mutation<FSkill, Partial<FSkill>>({
            query: (data) => ({ url: '/api/skills/backend', method: 'POST', body: data }),
            invalidatesTags: ['skills']
        }),
        uploadBackendSkillIcon: builder.mutation<void, FormData>({
            query: (formData) => ({ url: '/api/skills/backend/images', method: 'POST', body: formData }),
            invalidatesTags: ['skills']
        }),
        readBackendSkills: builder.query<FSkill[], void>({
            query: () => '/api/skills/backend',
            providesTags: ['skills']
        }),
        updateBackendSkill: builder.mutation<FSkill, { id: string, data: Partial<FSkill> }>({
            query: ({ id, data }) => ({ url: `/api/skills/backend/${id}`, method: 'PATCH', body: data }),
            invalidatesTags: ['skills']
        }),
        changeBackendSkillIcon: builder.mutation<void, { formData: FormData, oldImage: string | undefined }>({
            query: ({ formData, oldImage }) => ({ url: `/api/skills/backend/updateImage/${oldImage}`, method: 'POST', body: formData }),
            invalidatesTags: ['educations']
        }),
        // other
        createOtherSkill: builder.mutation<FSkill, Partial<FSkill>>({
            query: (data) => ({ url: '/api/skills/other', method: 'POST', body: data }),
            invalidatesTags: ['skills']
        }),
        uploadOtherSkillIcon: builder.mutation<void, FormData>({
            query: (formData) => ({ url: '/api/skills/other/images', method: 'POST', body: formData }),
            invalidatesTags: ['skills']
        }),
        readOtherSkills: builder.query<FSkill[], void>({
            query: () => '/api/skills/other',
            providesTags: ['skills']
        }),
        updateOtherSkill: builder.mutation<FSkill, { id: string, data: Partial<FSkill> }>({
            query: ({ id, data }) => ({ url: `/api/skills/other/${id}`, method: 'PATCH', body: data }),
            invalidatesTags: ['skills']
        }),
        changeOtherSkillIcon: builder.mutation<void, { formData: FormData, oldImage: string | undefined }>({
            query: ({ formData, oldImage }) => ({ url: `/api/skills/other/updateImage/${oldImage}`, method: 'POST', body: formData }),
            invalidatesTags: ['educations']
        }),
    }),
    overrideExisting: true
});

export const {
    // frontend
    useCreateFrontendSkillMutation,
    useUploadFrontendSkillIconMutation,
    useReadFrontendSkillsQuery,
    useUpdateFrontendSkillMutation,
    useChangeFrontendSkillIconMutation,
    // backend
    useCreateBackendSkillMutation,
    useUploadBackendSkillIconMutation,
    useReadBackendSkillsQuery,
    useUpdateBackendSkillMutation,
    useChangeBackendSkillIconMutation,
    // other
    useCreateOtherSkillMutation,
    useUploadOtherSkillIconMutation,
    useReadOtherSkillsQuery,
    useUpdateOtherSkillMutation,
    useChangeOtherSkillIconMutation,
} = skillsApi;