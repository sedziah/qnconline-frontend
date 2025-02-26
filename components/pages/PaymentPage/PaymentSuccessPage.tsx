"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Receipt21, ShoppingBag, TickCircle, Truck } from 'iconsax-react'
import confetti from 'canvas-confetti'

const PaymentSuccessPage = () => {
  const router = useRouter()

  useEffect(() => {
    // Trigger confetti animation on component mount
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        clearInterval(interval)
        return
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })
    }, 250)

    return () => {
      clearInterval(interval)
    }
  }, [])

  // Mock order details - in a real app, this would come from your order context/API
  const orderDetails = {
    orderNumber: "QNC-123456",
    total: 299.99,
    email: "customer@example.com",
    estimatedDelivery: "March 25, 2024"
  }

  return (
    <div className="min-h-screen bg-bglight flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 text-center mb-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <TickCircle variant="Bold" className="w-12 h-12 text-primary" />
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold mb-3">Payment Successful!</h1>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Thank you for your purchase. We've received your order and will begin processing it right away.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-1">Order Number</p>
              <p className="font-medium">{orderDetails.orderNumber}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-1">Total Amount</p>
              <p className="font-medium">₵{orderDetails.total.toFixed(2)}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-1">Confirmation Sent To</p>
              <p className="font-medium">{orderDetails.email}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
              <p className="font-medium">{orderDetails.estimatedDelivery}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-primary/5 rounded-xl p-4 flex items-center gap-3">
              <Truck className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-sm text-gray-600">
                We'll send you shipping confirmation when your order ships.
              </p>
            </div>
            <div className="bg-primary/5 rounded-xl p-4 flex items-center gap-3">
              <Receipt21 className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-sm text-gray-600">
                A receipt has been sent to your email address.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push('/orders')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Receipt21 className="w-5 h-5" />
            View Order
          </button>
          <button
            onClick={() => router.push('/shop')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccessPage 
