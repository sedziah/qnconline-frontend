import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // ✅ Persist cart in localStorage
import { toast } from "sonner"

// ✅ Define Cart Item Type
export interface CartItem {
  id: string;
  full_name: string;
  price: string | number; // ✅ Accept both string and number
  discounted_price?: string | number; // ✅ Also allow discount as a string
  quantity: number;
  image?: string;
  variation_specifications?: { specification_name: string; value: string }[];
}

// ✅ Define Cart State
interface CartState {
  cart: CartItem[];
}

// ✅ Define Initial State
const initialState: CartState = {
  cart: [],
};

// ✅ Create Cart Slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ Add item to cart
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity; // ✅ Increase quantity if already in cart
      } else {
        state.cart.push({ ...action.payload, quantity: Math.max(1, action.payload.quantity) }); // �� Ensure quantity is at least 1
      }
      toast.success("Item added to cart");
    },

    // ✅ Increase item quantity
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },

    // ✅ Decrease item quantity (but not below 1)
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },

    // ✅ Update item quantity in cart
    updateCartQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity); // ✅ Prevent quantity from going below 1
      }
    },

    // ✅ Remove item from cart
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    // ✅ Clear cart completely
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

// ✅ Export Actions
export const { addToCart, increaseQuantity, decreaseQuantity, updateCartQuantity, removeFromCart, clearCart } = cartSlice.actions;

// ✅ Persist the cart in localStorage
const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"], // ✅ Persist only the cart
};

export default persistReducer(persistConfig, cartSlice.reducer);
