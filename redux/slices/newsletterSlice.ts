import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NewsletterState {
  email: string;
  isSubscribed: boolean;
  error: string | null;
}

const initialState: NewsletterState = {
  email: "",
  isSubscribed: false,
  error: null,
};

const newsletterSlice = createSlice({
  name: "newsletter",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setSubscribed: (state) => {
      state.isSubscribed = true;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setEmail, setSubscribed, setError } = newsletterSlice.actions;
export default newsletterSlice.reducer;
