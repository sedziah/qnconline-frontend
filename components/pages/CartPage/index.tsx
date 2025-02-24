"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store"; // ✅ Correct Import
import { CartItem as CartItemType } from "../../../redux/slices/cartSlice"; // ✅ Correct Import
import CartItem from "@/components/Cards/CartItem";
import DefaultNavbar from "@/components/Navbars/DefaultNavbar";
import LoadingScreen from "@/components/ui/LoadingScreen"

const CartPage = () => {
  // �� Fetch cart data from Redux
  const cart = useSelector((state: RootState) => state.cart.cart);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Calculate total price
  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity), 
      0
    );
  };

  useEffect(() => {
    if (cart) {
      setIsLoading(false);
    }
  }, [cart]);

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="bg-bglight max-h-full overflow-hidden overflow-y-scroll">
      <DefaultNavbar />

      <section className="py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-base pt-10 font-semibold text-gray-900 sm:text-2xl">
            Shopping Cart
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            {/* ✅ Cart Items Section */}
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {cart?.length > 0 ? (
                  cart?.map((item: CartItemType) => (
                    <CartItem key={item.id} item={item} />
                  ))
                ) : (
                  <p className="text-gray-500">Your cart is empty.</p>
                )}
              </div>
            </div>

            {/* ✅ Order Summary */}
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-xl font-semibold text-gray-900">Order summary</p>

                <div className="space-y-4">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">Original price</dt>
                    <dd className="text-base font-medium text-gray-900">₵{calculateTotal().toFixed(2)}</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                    <dt className="text-base font-bold text-gray-900">Total</dt>
                    <dd className="text-base font-bold text-gray-900">₵{calculateTotal().toFixed(2)}</dd>
                  </dl>
                </div>

                <a href="#" className="flex w-full items-center justify-center rounded-lg bg-primary/90 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary-300">
                  Proceed to Checkout
                </a>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500"> or </span>
                  <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary underline hover:no-underline">
                    Continue Shopping
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
