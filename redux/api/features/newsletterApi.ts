// redux/api/features/newsletterApi.ts
import apiClient from "../api_client/apiClient";

export const newsletterApi = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    subscribeNewsletter: builder.mutation<void, string>({
      query: (email) => ({
        url: "/newsletter/subscribe",
        method: "POST",
        body: { email },
      }),
    }),
  }),
});

export const { useSubscribeNewsletterMutation } = newsletterApi;
