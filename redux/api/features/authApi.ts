/**
 * authApi.ts
 *
 * Authentication-related API endpoints, injected into the apiClient.
 */

// redux/api/features/authApi.ts
import apiClient from "../api_client/apiClient";

export const authApi = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ 1. Login
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login/",
        method: "POST",
        body: credentials,
      }),
    }),

    // ✅ 2. Fetch User Profile
    fetchUser: builder.query({
      query: () => ({
        url: "/auth/user/",
        method: "GET",
      }),
    }),

    // ✅ 3. Logout
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout/",
        method: "POST",
      }),
    }),

    // ✅ 4. Register
    register: builder.mutation({
      query: (userData) => ({
        url: "/auth/register/",
        method: "POST",
        body: userData,
      }),
    }),

    // ✅ 5. Password Reset Request
    resetPasswordRequest: builder.mutation({
      query: (email) => ({
        url: "/auth/password/reset/",
        method: "POST",
        body: { email },
      }),
    }),

    // ✅ 6. Password Reset Confirm
    passwordResetConfirm: builder.mutation({
      query: ({ uid, token, newPassword }) => ({
        url: `/auth/password/reset/confirm/`,
        method: "POST",
        body: { uid, token, new_password: newPassword },
      }),
    }),

    // ✅ 7. Change Password
    changePassword: builder.mutation({
      query: (passwordData) => ({
        url: "/auth/password/change/",
        method: "POST",
        body: passwordData,
      }),
    }),

    // ✅ 8. Resend Activation Email
    resendActivation: builder.mutation({
      query: (email) => ({
        url: "/auth/activation/resend/",
        method: "POST",
        body: { email },
      }),
    }),

    // ✅ 9. Verify Email
    verifyEmail: builder.mutation({
      query: ({ uid, token }) => ({
        url: `/auth/activation/verify/`,
        method: "POST",
        body: { uid, token },
      }),
    }),

    // ✅ 10. Token Refresh (for JWT)
    tokenRefresh: builder.mutation({
      query: (refreshToken) => ({
        url: "/auth/token/refresh/",
        method: "POST",
        body: { refresh: refreshToken },
      }),
    }),
  }),
  overrideExisting: false,
});

// 🟢 Export Hooks for All Auth Operations
export const {
  useLoginMutation,
  useFetchUserQuery,
  useLogoutMutation,
  useRegisterMutation,
  useResetPasswordRequestMutation,
  usePasswordResetConfirmMutation,
  useChangePasswordMutation,
  useResendActivationMutation,
  useVerifyEmailMutation,
  useTokenRefreshMutation,
} = authApi;
