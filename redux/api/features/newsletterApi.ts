import  apiClient  from "../api_client/apiClient";
import { subscribeNewsletterUrl } from "../endpoints/endpoints"; // Import the newsletter endpoint

export const newsletterApi = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    // Newsletter Subscription
    subscribeNewsletter: builder.mutation<void, string>({
      query: (email) => ({
        url: subscribeNewsletterUrl,
        method: "POST",
        body: { email },
      }),
    }),
  }),
  overrideExisting: false, // Avoid overriding existing endpoints
});

// Export the hook for subscribing
export const { useSubscribeNewsletterMutation } = newsletterApi;
