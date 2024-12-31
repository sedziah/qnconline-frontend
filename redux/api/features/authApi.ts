/**
 * authApi.ts
 *
 * Authentication-related API endpoints, injected into the apiClient.
 */

import { apiClient } from "../api_client/apiClient";
import {
  loginUrl,
  logoutUrl,
  checkSessionUrl,
  registerUrl,
  verifyEmailUrl,
  resendVerificationUrl,
  resetPasswordRequestUrl,
  changePasswordUrl,
  passwordResetConfirmUrl,
  guestUserCreateUrl,
  subscribeEmailUrl,
  uploadDocumentsUrl,
  tokenObtainPairUrl,
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

    // Logout endpoint
    logout: builder.mutation({
      query: () => ({
        url: logoutUrl,
        method: "POST",
      }),
    }),

    // Check session query
    checkSession: builder.query({
      query: () => checkSessionUrl,
    }),

    // Register endpoint
    register: builder.mutation({
      query: (userData) => ({
        url: registerUrl,
        method: "POST",
        body: userData,
      }),
    }),

    // Verify email endpoint
    verifyEmail: builder.mutation({
      query: ({ token }) => ({
        url: verifyEmailUrl.replace(':token', token),
        method: "GET",
      }),
    }),

    // Resend verification email endpoint
    resendVerification: builder.mutation({
      query: (email) => ({
        url: resendVerificationUrl,
        method: "POST",
        body: { email },
      }),
    }),

    // Reset password request endpoint
    resetPasswordRequest: builder.mutation({
      query: (email) => ({
        url: resetPasswordRequestUrl,
        method: "POST",
        body: { email },
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

    // Password reset confirm endpoint
    passwordResetConfirm: builder.mutation({
      query: ({ uidb64, token, newPassword }) => ({
        url: passwordResetConfirmUrl.replace(':uidb64', uidb64).replace(':token', token),
        method: "POST",
        body: { new_password: newPassword },
      }),
    }),

    // Guest user creation endpoint
    guestUserCreate: builder.mutation({
      query: () => ({
        url: guestUserCreateUrl,
        method: "POST",
      }),
    }),

    // Subscribe email endpoint
    subscribeEmail: builder.mutation({
      query: (email) => ({
        url: subscribeEmailUrl,
        method: "POST",
        body: { email },
      }),
    }),

    // Upload documents endpoint
    uploadDocuments: builder.mutation({
      query: (formData) => ({
        url: uploadDocumentsUrl,
        method: "POST",
        body: formData,
      }),
    }),

    // Token obtain pair endpoint
    tokenObtainPair: builder.mutation({
      query: (credentials) => ({
        url: tokenObtainPairUrl,
        method: "POST",
        body: credentials,
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
  useLogoutMutation,
  useCheckSessionQuery,
  useRegisterMutation,
  useVerifyEmailMutation,
  useResendVerificationMutation,
  useResetPasswordRequestMutation,
  useChangePasswordMutation,
  usePasswordResetConfirmMutation,
  useGuestUserCreateMutation,
  useSubscribeEmailMutation,
  useUploadDocumentsMutation,
  useTokenObtainPairMutation,
  useTokenRefreshMutation,
} = authApi;
