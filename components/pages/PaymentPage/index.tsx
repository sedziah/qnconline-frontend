"use client"
import DefaultNavbar from '@/components/Navbars/DefaultNavbar'
import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'iconsax-react'
import CustomInput from '@/components/Inputs/CustomInput'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'

interface PaymentFormData {
  paymentMethod: 'card' | 'momo'
  cardNumber?: string
  cardExpiry?: string
  cardCvc?: string
  cardName?: string
  momoNumber?: string
  momoName?: string
  momoProvider?: 'mtn' | 'vodafone' | 'airteltigo'
}

interface PaymentOption {
  id: 'card' | 'momo'
  title: string
  description: string
  icon: string | React.ReactNode
}

const PaymentPage = () => {
  const router = useRouter()
  const cart = useSelector((state: RootState) => state.cart.cart)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<PaymentFormData>({
    defaultValues: {
      paymentMethod: 'card'
    }
  })

  const paymentOptions: PaymentOption[] = [
    {
      id: 'card',
      title: 'Credit / Debit Card',
      description: 'Pay securely with your card',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      id: 'momo',
      title: 'Mobile Money',
      description: 'Pay with your mobile money wallet',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 18v-3m0 0V9m0 6h.01M8 9h.01M12 9h.01M16 9h.01M20 9h.01M4 9h.01" />
        </svg>
      )
    }
  ]

  const momoProviders = [
    {
      id: 'mtn',
      name: 'MTN Mobile Money',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh1DZpMsH7WfqiU7sB6Pky_rHEQAumb9Tg-A&s'
    },
    {
      id: 'vodafone',
      name: 'Vodafone Cash',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl4R7lA1tlSlrBzf9OrDXIswYytfI7TfvC0w&s'
    },
    {
      id: 'airteltigo',
      name: 'AirtelTigo Money',
      logo: 'https://www.gsma.com/get-involved/gsma-membership/wp-content/uploads/2014/06/AirtelTigo-Logo-White-background.png'
    }
  ]

  const selectedPayment = watch('paymentMethod')
  const momoProvider = watch('momoProvider')

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    )
  }

  // Card validation helpers
  const validateCardNumber = (value: string) => {
    // Remove spaces and dashes
    const cardNumber = value.replace(/[\s-]/g, '')

    // Check if the number contains only digits
    if (!/^\d+$/.test(cardNumber)) return false

    // Luhn Algorithm
    let nCheck = 0
    let bEven = false

    for (let n = cardNumber.length - 1; n >= 0; n--) {
      let nDigit = parseInt(cardNumber.charAt(n), 10)

      if (bEven && (nDigit *= 2) > 9) {
        nDigit -= 9
      }

      nCheck += nDigit
      bEven = !bEven
    }

    return (nCheck % 10) === 0
  }

  const validateExpiryDate = (value: string) => {
    if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(value)) return false

    const [month, year] = value.split('/')
    const expiry = new Date(2000 + parseInt(year), parseInt(month))
    const today = new Date()
    today.setDate(1) // Set to first day of month for accurate month comparison

    return expiry > today
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ''
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(' ')
    } else {
      return value
    }
  }

  const onSubmit = (data: PaymentFormData) => {
    console.log(data)
    router.push('/confirmation')
  }

  return (
    <div className="bg-bglight min-h-screen relative pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
      <DefaultNavbar />

      <section className="py-4 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="mt-6 gap-8 lg:flex lg:items-start">
            <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
              {/* Header */}
              <div className='flex items-center justify-between w-full'>
                <button type="button" onClick={() => router.back()} className="hover:text-primary transition-colors">
                  <ArrowLeft className='w-6 h-6' />
                </button>
                <h2 className='text-base font-normal'>
                  <span className='text-primary'>3/3</span> Payment
                </h2>
                <div className='w-6 h-6' />
              </div>

              {/* Progress bar */}
              <div className='w-full h-[2px] bg-gray-200 mt-4'>
                <div className='w-full h-full bg-black' />
              </div>

              {/* Payment Method */}
              <div className='w-full bg-white mt-5 rounded-lg p-6'>
                <h2 className='text-lg font-semibold mb-4'>Payment method</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {paymentOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`
                        relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all
                        ${selectedPayment === option.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                        }
                      `}
                    >
                      <input
                        type="radio"
                        value={option.id}
                        className="absolute h-0 w-0 opacity-0"
                        {...register('paymentMethod')}
                      />
                      <div className="flex items-start gap-4">
                        <div className={`
                          p-2 rounded-lg transition-colors
                          ${selectedPayment === option.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}
                        `}>
                          {option.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{option.title}</p>
                          <p className="text-sm text-gray-500 mt-1">{option.description}</p>
                        </div>
                      </div>
                      {selectedPayment === option.id && (
                        <div className="absolute top-4 right-4">
                          <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </label>
                  ))}
                </div>

                {/* Card Payment Form */}
                {selectedPayment === 'card' && (
                  <div className='mt-6 border-t pt-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div className='md:col-span-2'>
                        <CustomInput
                          labal='Card number'
                          error={errors.cardNumber?.message}
                          {...register('cardNumber', {
                            required: 'Card number is required',
                            validate: {
                              format: (value) => {
                                const formatted = value?.replace(/\s/g, '')
                                return (formatted?.length! >= 15 && formatted?.length! <= 16) || 'Card number must be 15-16 digits'
                              },
                              luhn: (value) => validateCardNumber(value!) || 'Please enter a valid card number',
                            },
                            onChange: (e) => {
                              e.target.value = formatCardNumber(e.target.value)
                            }
                          })}
                        />
                      </div>
                      <CustomInput
                        labal='Expiry date (MM/YY)'
                        error={errors.cardExpiry?.message}
                        {...register('cardExpiry', {
                          required: 'Expiry date is required',
                          validate: {
                            format: (value) => /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(value!) || 'Invalid format (MM/YY)',
                            future: (value) => validateExpiryDate(value!) || 'Card has expired',
                          },
                          onChange: (e) => {
                            const value = e.target.value.replace(/\D/g, '')
                            if (value.length >= 2) {
                              e.target.value = value.slice(0, 2) + '/' + value.slice(2, 4)
                            } else {
                              e.target.value = value
                            }
                          }
                        })}
                      />
                      <CustomInput
                        labal='CVC'
                        error={errors.cardCvc?.message}
                        {...register('cardCvc', {
                          required: 'CVC is required',
                          validate: {
                            format: (value) => /^[0-9]{3,4}$/.test(value!) || 'CVC must be 3-4 digits'
                          },
                          maxLength: {
                            value: 4,
                            message: 'CVC cannot be more than 4 digits'
                          }
                        })}
                      />
                      <div className='md:col-span-2'>
                        <CustomInput
                          labal='Name on card'
                          error={errors.cardName?.message}
                          {...register('cardName', {
                            required: 'Name on card is required',
                            pattern: {
                              value: /^[a-zA-Z\s-']+$/,
                              message: 'Please enter a valid name'
                            },
                            minLength: {
                              value: 3,
                              message: 'Name must be at least 3 characters'
                            }
                          })}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Mobile Money Form */}
                {selectedPayment === 'momo' && (
                  <div className='mt-6 border-t pt-6'>
                    <div className='space-y-6'>
                      <div className='grid grid-cols-3 gap-4'>
                        {momoProviders.map((provider) => (
                          <label
                            key={provider.id}
                            className={`
                              relative flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all
                              ${momoProvider === provider.id
                                ? 'border-primary bg-primary/5'
                                : 'border-gray-200 hover:border-gray-300'
                              }
                            `}
                          >
                            <input
                              type="radio"
                              value={provider.id}
                              className="absolute h-0 w-0 opacity-0"
                              {...register('momoProvider', { required: 'Please select a provider' })}
                            />
                            <div className="relative w-16 h-16 mb-2">
                              <img
                                src={provider.logo}
                                alt={provider.name}
                                className="w-full h-full object-contain rounded-lg"
                              />
                            </div>
                            <span className="text-sm font-medium text-center">
                              {provider.name}
                            </span>
                            {momoProvider === provider.id && (
                              <div className="absolute top-2 right-2">
                                <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center">
                                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                              </div>
                            )}
                          </label>
                        ))}
                      </div>

                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <CustomInput
                          defaultValue=""
                          labal='Mobile money number'
                          error={errors.momoNumber?.message}
                          {...register('momoNumber', {
                            required: 'Mobile money number is required',
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: 'Please enter a valid mobile number'
                            }
                          })}
                        />
                        <CustomInput
                          defaultValue=""
                          labal='Account name'
                          error={errors.momoName?.message}
                          {...register('momoName', { required: 'Account name is required' })}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Continue Button - Mobile */}
              <div className='fixed bottom-0 z-50 left-0 right-0 p-4 bg-white border-t md:hidden'>
                <button
                  type="submit"
                  className='w-full bg-primary text-white rounded-full py-3 font-medium hover:bg-primary/90 transition-colors'
                >
                  Complete Order
                </button>
              </div>
            </form>

            {/* Order Summary */}
            <div className="hidden md:block w-96">
              <div className="sticky top-24 space-y-4 rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="text-lg font-semibold">Order Summary</h2>

                <div className="space-y-4 max-h-[50vh] overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="flex-1">
                        <p className="font-medium truncate">{item.full_name}</p>
                        <p className="text-sm text-gray-500">{item.quantity} x ₵{item.price}</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">₵{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₵{calculateTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">₵{calculateTotal().toFixed(2)}</span>
                  </div>
                </div>

                {/* Continue Button - Desktop */}
                <button
                  type="submit"
                  form="payment-form"
                  className='w-full bg-primary text-white rounded-full py-3 font-medium hover:bg-primary/90 transition-colors'
                >
                  Complete Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaymentPage