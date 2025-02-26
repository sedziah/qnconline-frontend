"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, CloseCircle, MessageQuestion, Receipt21, RefreshCircle } from 'iconsax-react'

const PaymentFailedPage = () => {
  const router = useRouter()

  // Mock error details - in a real app
  const errorDetails = {
    orderNumber: "QNC-123456",
    errorMessage: "Your payment was declined. Please check your card details and try again.",
    supportEmail: "support@qnconline.com",
    supportPhone: "+233 123 456 789"
  }

  const commonErrors = [
    {
      title: "Insufficient funds",
      description: "Ensure you have enough balance in your account"
    },
    {
      title: "Incorrect card details",
      description: "Double-check your card number, expiry date, and CVV"
    },
    {
      title: "Bank declined transaction",
      description: "Contact your bank to authorize the transaction"
    }
  ]

  return (
    <div className="min-h-screen bg-bglight flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 text-center mb-6">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CloseCircle variant="Bold" className="w-12 h-12 text-red-500" />
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold mb-3">Payment Failed</h1>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            {errorDetails.errorMessage}
          </p>

          <div className="bg-red-50 rounded-xl p-4 mb-8 text-left">
            <div className="flex items-start gap-3">
              <Receipt21 className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-red-700 mb-1">Order Reference</p>
                <p className="text-sm text-red-600">{errorDetails.orderNumber}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 mb-8">
            <h2 className="text-lg font-medium mb-4">Common Reasons for Failed Payments</h2>
            <div className="grid gap-4">
              {commonErrors.map((error, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 text-left">
                  <p className="font-medium mb-1">{error.title}</p>
                  <p className="text-sm text-gray-500">{error.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-primary/5 rounded-xl p-4 flex items-center gap-3">
              <MessageQuestion className="w-6 h-6 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm text-gray-600 mb-1">Need help? Contact our support team</p>
                <div className="flex flex-col text-sm">
                  <a href={`mailto:${errorDetails.supportEmail}`} className="text-primary hover:underline">
                    {errorDetails.supportEmail}
                  </a>
                  <a href={`tel:${errorDetails.supportPhone}`} className="text-primary hover:underline">
                    {errorDetails.supportPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <RefreshCircle className="w-5 h-5" />
            Try Again
          </button>
          <button
            onClick={() => router.push('/cart')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Return to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentFailedPage 
