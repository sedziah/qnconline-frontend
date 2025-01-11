/**
 * authApi.ts
 *
 * Authentication-related API endpoints, injected into the apiClient.
 */

import { apiClient } from "../api_client/apiClient";
import {
  loginUrl,
  fetchUserUrl,
  logoutUrl,
  registerUrl,
  resetPasswordRequestUrl,
  passwordResetConfirmUrl,
  changePasswordUrl,
  resendActivationUrl,
  verifyEmailUrl,
  tokenRefreshUrl,
} from "../endpoints/endpoints";

export const authApi = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    // Login endpoint
    login: builder.mutation({
      query: (credentials) => ({
        url: loginUrl,
        method: "POST",
        body: credentials,
      }),
    }),

    // Fetch user endpoint
    fetchUser: builder.query({
      query: () => ({
        url: fetchUserUrl,
        method: "GET",
      }),
    }),

    // Logout endpoint
    logout: builder.mutation({
      query: () => ({
        url: logoutUrl,
        method: "POST",
      }),
    }),

    // Register endpoint
    register: builder.mutation({
      query: (userData) => ({
        url: registerUrl,
        method: "POST",
        body: userData,
      }),
    }),

    // Password reset request endpoint
    resetPasswordRequest: builder.mutation({
      query: (email) => ({
        url: resetPasswordRequestUrl,
        method: "POST",
        body: { email },
      }),
    }),

    // Password reset confirmation endpoint
    passwordResetConfirm: builder.mutation({
      query: ({ uidb64, token, newPassword }) => ({
        url: passwordResetConfirmUrl
          .replace(":uidb64", uidb64)
          .replace(":token", token),
        method: "POST",
        body: { new_password: newPassword },
      }),
    }),

    // Change password endpoint
    changePassword: builder.mutation({
      query: (passwordData) => ({
        url: changePasswordUrl,
        method: "POST",
        body: passwordData,
      }),
    }),

    // Resend email activation endpoint
    resendActivation: builder.mutation({
      query: (email) => ({
        url: resendActivationUrl,
        method: "POST",
        body: { email },
      }),
    }),

    // Verify email endpoint
    verifyEmail: builder.mutation({
      query: ({ uid, token }) => ({
        url: verifyEmailUrl.replace(":uid", uid).replace(":token", token),
        method: "POST",
      }),
    }),

    // Token refresh endpoint
    tokenRefresh: builder.mutation({
      query: (refreshToken) => ({
        url: tokenRefreshUrl,
        method: "POST",
        body: { refresh: refreshToken },
      }),
    }),
  }),
});

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
