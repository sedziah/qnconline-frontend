/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  CartItem as CartItemType,
} from "../../redux/slices/cartSlice"; // ✅ Import Redux actions
import { AppDispatch } from "@/redux/store/store"; // ✅ Import store type

interface Props {
  item: CartItemType; // ✅ Ensure the `item` prop is correctly typed
}

const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        {/* ✅ Product Image */}
        <a href="#" className="shrink-0 md:order-1">
          <img
            className="h-20 w-20 block"
            src={item.image || "/placeholder.png"} // ✅ Use actual product image
            alt={item.full_name}
          />
        </a>

        {/* ✅ Quantity Control */}
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            {/* 🔽 Decrease Quantity */}
            <button
              type="button"
              className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
              onClick={() => dispatch(decreaseQuantity(item.id))}
              disabled={item.quantity <= 1}
            >
              <svg
                className="h-2.5 w-2.5 text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
              </svg>
            </button>

            {/* ✅ Quantity Input */}
            <input
              type="text"
              className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900"
              value={item.quantity}
              readOnly
            />

            {/* 🔼 Increase Quantity */}
            <button
              type="button"
              className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
              onClick={() => dispatch(increaseQuantity(item.id))}
            >
              <svg
                className="h-2.5 w-2.5 text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>

          {/* ✅ Price Display */}
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900">₵{(Number(item.price) * item.quantity).toFixed(2)}</p>
          </div>
        </div>

        {/* ✅ Product Details */}
        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <a href="#" className="text-sm font-medium text-gray-900 hover:underline">
            {item.full_name}
          </a>

          <div className="flex items-center gap-4">
            {/* ❌ Remove Item Button */}
            <button
              type="button"
              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
