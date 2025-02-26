"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Box1, Receipt21, Sms, TickCircle, Truck, Calendar, Location } from 'iconsax-react'
import Link from 'next/link'
import DefaultNavbar from '@/components/Navbars/DefaultNavbar'

const ConfirmationPage = () => {
  const router = useRouter()
  const cart = useSelector((state: RootState) => state.cart.cart)

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    )
  }

  const orderNumber = `QNC-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
  const estimatedDelivery = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  })

  const steps = [
    {
      icon: <Receipt21 variant="Bold" className="w-6 h-6" />,
      title: 'Order Confirmation',
      description: 'Your order has been confirmed and will be shipped soon.',
      status: 'completed'
    },
    {
      icon: <Box1 variant="Bold" className="w-6 h-6" />,
      title: 'Order Processing',
      description: 'We are preparing your items for shipment.',
      status: 'current'
    },
    {
      icon: <Truck variant="Bold" className="w-6 h-6" />,
      title: 'Out for Delivery',
      description: 'Your package will be on its way soon.',
      status: 'pending'
    }
  ]

  const orderInfo = [
    {
      icon: <Calendar className="w-5 h-5" />,
      label: 'Estimated Delivery',
      value: estimatedDelivery
    },
    {
      icon: <Location className="w-5 h-5" />,
      label: 'Shipping Address',
      value: '123 Main Street, Accra, Ghana'
    },
    {
      icon: <Sms className="w-5 h-5" />,
      label: 'Order Updates',
      value: 'You will receive updates via SMS and email'
    }
  ]

  return (
    <div className="bg-bglight min-h-screen">
      <DefaultNavbar />
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-16 mt-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.push('/')}
            className="flex items-center text-sm font-medium text-gray-600 hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Continue Shopping
          </button>
          <Link
            href="/orders"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View Orders
          </Link>
        </div>

        {/* Success Message */}
        <div className="bg-white rounded-2xl p-6 md:p-8 text-center mb-8 shadow-sm">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
            <TickCircle variant="Bold" className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-semibold mb-3">Thank you for your order!</h1>
          <p className="text-gray-600 mb-6 text-lg">
            Your order <span className="font-medium text-black">{orderNumber}</span> has been placed successfully.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/5 px-6 py-3 rounded-full">
            <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Processing Order</span>
          </div>
        </div>

        {/* Order Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {orderInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500">{info.label}</p>
                  <p className="font-medium">{info.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Progress */}
        <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-8">Order Status</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    ${step.status === 'completed' ? 'bg-green-500 text-white' :
                      step.status === 'current' ? 'bg-primary text-white' :
                        'bg-gray-100 text-gray-400'}
                  `}>
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`
                      w-0.5 h-16 mx-auto my-1
                      ${step.status === 'completed' ? 'bg-green-500' :
                        step.status === 'current' ? 'bg-primary' :
                          'bg-gray-200'}
                    `} />
                  )}
                </div>
                <div className={`flex-1 pt-2 ${step.status === 'pending' ? 'opacity-60' : ''
                  }`}>
                  <h3 className="font-medium text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
          <div className="divide-y">
            {cart.map((item) => (
              <div key={item.id} className="py-4 flex items-start gap-4 group">
                <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.full_name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">{item.full_name}</h3>
                  <p className="text-gray-600 mt-1">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-lg">₵{(Number(item.price) * Number(item.quantity)).toFixed(2)}</p>
                </div>
              </div>
            ))}
            <div className="py-6 space-y-3">
              <div className="flex justify-between text-base">
                <span className="text-gray-600">Subtotal</span>
                <span>₵{calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-500 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-lg font-semibold pt-3 border-t">
                <span>Total</span>
                <span className="text-primary">₵{calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationPage