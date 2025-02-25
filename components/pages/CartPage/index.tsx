"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store"; // ✅ Correct Import
import { CartItem as CartItemType } from "../../../redux/slices/cartSlice"; // ✅ Correct Import
import CartItem from "@/components/Cards/CartItem";
import DefaultNavbar from "@/components/Navbars/DefaultNavbar";
import LoadingScreen from "@/components/ui/LoadingScreen"
import { useRouter } from "next/navigation"

const CartPage = () => {
  // �� Fetch cart data from Redux
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Calculate total price
  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity), 
      0
    );
  };

  const handleCheckout = () => {
    // Add logic to handle checkout
    router.push("/shipping");
  }

  useEffect(() => {
    if (cart) {
      setIsLoading(false);
    }
  }, [cart]);

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="bg-bglight min-h-screen relative pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
      <DefaultNavbar />

      <section className="py-4 antialiased md:py-16 h-full">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="flex items-center justify-between pt-16">
            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
            </h2>
            <a
              href="/"
              className="text-primary hover:text-primary/90 inline-flex items-center text-sm font-medium"
            >
              Continue Shopping
              <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </a>
          </div>

          <div className="mt-6 gap-6 lg:flex lg:items-start">
            {/* Cart Items Section */}
            <div className="w-full flex-1 lg:max-w-2xl xl:max-w-4xl h-screen">
              <div className="space-y-4">
                {cart?.length > 0 ? (
                  cart?.map((item: CartItemType) => (
                    <CartItem key={item.id} item={item} />
                  ))
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <p className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</p>
                      <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
                      <a href="/" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
                        Start Shopping
                      </a>
                    </div>
                )}
              </div>
            </div>

            {/* Order Summary - Desktop: Side, Mobile: Bottom Fixed */}
            {cart.length > 0 && (
              <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:relative md:border-none md:p-0 md:mt-0 md:w-96 transition-transform duration-300 ease-in-out transform translate-y-0">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                  <p className="text-lg font-semibold text-gray-900">Order Summary</p>

                  <div className="space-y-3">
                    <dl className="flex items-center justify-between">
                      <dt className="text-gray-600">Subtotal</dt>
                      <dd className="font-medium text-gray-900">₵{calculateTotal().toFixed(2)}</dd>
                    </dl>
                    <dl className="flex items-center justify-between">
                      <dt className="text-gray-600">Shipping</dt>
                      <dd className="font-medium text-green-600">Free</dd>
                    </dl>
                    <div className="border-t border-gray-200 pt-3">
                      <dl className="flex items-center justify-between">
                        <dt className="text-base font-semibold text-gray-900">Total</dt>
                        <dd className="text-base font-semibold text-gray-900">₵{calculateTotal().toFixed(2)}</dd>
                      </dl>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
