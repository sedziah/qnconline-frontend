"use client"
import DefaultNavbar from '@/components/Navbars/DefaultNavbar'
import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'iconsax-react'
import CustomInput from '@/components/Inputs/CustomInput'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'

interface ShippingFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  apartment?: string
  city: string
  region: string
  postalCode?: string
  deliveryMethod: 'standard' | 'express'
  billingFirstName?: string
  billingLastName?: string
  billingEmail?: string
  billingPhone?: string
  billingAddress?: string
  billingApartment?: string
  billingCity?: string
  billingRegion?: string
  billingPostalCode?: string
}

interface DeliveryOption {
  id: 'standard' | 'express'
  title: string
  description: string
  price: number
  estimatedDays: string
  icon: React.ReactNode
}

const ShippingPage = () => {
  const router = useRouter()
  const cart = useSelector((state: RootState) => state.cart.cart)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ShippingFormData>({
    defaultValues: {
      deliveryMethod: 'standard',
      billingAddress: 'same'
    }
  })

  const deliveryOptions: DeliveryOption[] = [
    {
      id: 'standard',
      title: 'Standard delivery',
      description: 'Best for regular orders',
      price: 0,
      estimatedDays: '4-5 business days',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M20 8h-9.586L8.707 6.293a1 1 0 0 0-1.414 0L5.586 8H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z" />
        </svg>
      )
    },
    {
      id: 'express',
      title: 'Express delivery',
      description: 'Guaranteed delivery within 24 hours',
      price: 25,
      estimatedDays: '1-2 business days',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  const selectedDelivery = watch('deliveryMethod')
  const selectedBilling = watch('billingAddress')

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    )
  }

  const onSubmit = (data: ShippingFormData) => {
    // If billing address is the same as shipping, copy shipping address details
    const formData = {
      ...data,
      ...(data.billingAddress === 'same' && {
        billingFirstName: data.firstName,
        billingLastName: data.lastName,
        billingEmail: data.email,
        billingPhone: data.phone,
        billingAddress: data.address,
        billingApartment: data.apartment,
        billingCity: data.city,
        billingRegion: data.region,
        billingPostalCode: data.postalCode,
      })
    }

    console.log(formData)
    router.push('/payment')
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
                  <span className='text-primary'>2/3</span> Shipping
                </h2>
                <div className='w-6 h-6' />
              </div>

              {/* Progress bar */}
              <div className='w-full h-[2px] bg-gray-200 mt-4'>
                <div className='w-1/2 h-full bg-black' />
              </div>

              {/* Shipping Address */}
              <div className='w-full bg-white mt-5 rounded-lg p-6 space-y-6'>
                <h2 className='text-lg font-semibold'>Shipping address</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <CustomInput
                    value={watch('firstName')}
                    labal='First name'
                    error={errors.firstName?.message}
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  <CustomInput
                    value={watch('lastName')}
                    labal='Last name'
                    error={errors.lastName?.message}
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                  <CustomInput
                    value={watch('email')}
                    labal='Email'
                    type="email"
                    error={errors.email?.message}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  <CustomInput
                    value={watch('phone')}
                    labal='Phone'
                    type="tel"
                    error={errors.phone?.message}
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  <div className='md:col-span-2'>
                    <CustomInput
                      value={watch('address')}
                      labal='Address'
                      error={errors.address?.message}
                      {...register('address', { required: 'Address is required' })}
                    />
                  </div>
                  <CustomInput
                    value={watch('apartment')!}
                    labal='Apartment, suite, etc. (optional)'
                    {...register('apartment')}
                  />
                  <CustomInput
                    value={watch('city')}
                    labal='City'
                    error={errors.city?.message}
                    {...register('city', { required: 'City is required' })}
                  />
                  <CustomInput
                    value={watch('region')}
                    labal='Region'
                    error={errors.region?.message}
                    {...register('region', { required: 'Region is required' })}
                  />
                  <CustomInput
                    value={watch('postalCode')!}
                    labal='Postal code (optional)'
                    {...register('postalCode')}
                  />
                </div>
              </div>

              {/* Delivery Method */}
              <div className='w-full bg-white mt-5 rounded-lg p-6'>
                <h2 className='text-lg font-semibold mb-4'>Delivery method</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {deliveryOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`
                        relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all
                        ${selectedDelivery === option.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                        }
                      `}
                    >
                      <input
                        type="radio"
                        value={option.id}
                        className="absolute h-0 w-0 opacity-0"
                        {...register('deliveryMethod')}
                      />
                      <div className="flex items-start gap-4">
                        <div className={`
                          p-2 rounded-lg transition-colors
                          ${selectedDelivery === option.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}
                        `}>
                          {option.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-medium">{option.title}</p>
                            <span className={`font-medium ${option.price === 0 ? 'text-green-600' : ''}`}>
                              {option.price === 0 ? 'Free' : `₵${option.price.toFixed(2)}`}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">{option.description}</p>
                          <p className="text-sm text-gray-500 mt-2">
                            Estimated delivery: {option.estimatedDays}
                          </p>
                        </div>
                      </div>
                      {selectedDelivery === option.id && (
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
              </div>

              {/* Billing Address */}
              <div className='w-full bg-white mt-5 rounded-lg p-6'>
                <h2 className='text-lg font-semibold mb-4'>Billing address</h2>
                <div className='space-y-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <label
                      className={`
                        relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all
                        ${selectedBilling === 'same'
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                        }
                      `}
                    >
                      <input
                        type="radio"
                        value={watch('billingAddress')}
                        className="absolute h-0 w-0 opacity-0"
                        {...register('billingAddress')}
                      />
                      <div className="flex items-start gap-4">
                        <div className={`
                          p-2 rounded-lg transition-colors
                          ${selectedBilling === 'same' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}
                        `}>
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Same as shipping address</p>
                          <p className="text-sm text-gray-500 mt-1">Use the address provided above</p>
                        </div>
                      </div>
                      {selectedBilling === 'same' && (
                        <div className="absolute top-4 right-4">
                          <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </label>

                    <label
                      className={`
                        relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all
                        ${selectedBilling === 'different'
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                        }
                      `}
                    >
                      <input
                        type="radio"
                        value="different"
                        className="absolute h-0 w-0 opacity-0"
                        {...register('billingAddress')}
                      />
                      <div className="flex items-start gap-4">
                        <div className={`
                          p-2 rounded-lg transition-colors
                          ${selectedBilling === 'different' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}
                        `}>
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Use a different billing address</p>
                          <p className="text-sm text-gray-500 mt-1">Add a new billing address</p>
                        </div>
                      </div>
                      {selectedBilling === 'different' && (
                        <div className="absolute top-4 right-4">
                          <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </label>
                  </div>

                  {/* Conditional Billing Address Form */}
                  {selectedBilling === 'different' && (
                    <div className='mt-6 border-t pt-6'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <CustomInput
                          value={watch('billingFirstName')!}
                          labal='First name'
                          error={errors.billingFirstName?.message}
                          {...register('billingFirstName', {
                            required: selectedBilling === 'different' ? 'First name is required' : false
                          })}
                        />
                        <CustomInput
                          value={watch('billingLastName')!}
                          labal='Last name'
                          error={errors.billingLastName?.message}
                          {...register('billingLastName', {
                            required: selectedBilling === 'different' ? 'Last name is required' : false
                          })}
                        />
                        <CustomInput
                          value={watch('billingEmail')!}
                          labal='Email'
                          type="email"
                          error={errors.billingEmail?.message}
                          {...register('billingEmail', {
                            required: selectedBilling === 'different' ? 'Email is required' : false,
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                        />
                        <CustomInput
                          value={watch('billingPhone')!}
                          labal='Phone'
                          type="tel"
                          error={errors.billingPhone?.message}
                          {...register('billingPhone', {
                            required: selectedBilling === 'different' ? 'Phone number is required' : false
                          })}
                        />
                        <div className='md:col-span-2'>
                          <CustomInput
                            value={watch('billingAddress')!}
                            labal='Address'
                            error={errors.billingAddress?.message}
                            {...register('billingAddress', {
                              required: selectedBilling === 'different' ? 'Address is required' : false
                            })}
                          />
                        </div>
                        <CustomInput
                          value={watch('billingApartment')!}
                          labal='Apartment, suite, etc. (optional)'
                          {...register('billingApartment')}
                        />
                        <CustomInput
                          value={watch('billingCity')!}
                          labal='City'
                          error={errors.billingCity?.message}
                          {...register('billingCity', {
                            required: selectedBilling === 'different' ? 'City is required' : false
                          })}
                        />
                        <CustomInput
                          value={watch('billingRegion')!}
                          labal='Region'
                          error={errors.billingRegion?.message}
                          {...register('billingRegion', {
                            required: selectedBilling === 'different' ? 'Region is required' : false
                          })}
                        />
                        <CustomInput
                          value={watch('billingPostalCode')!}
                          labal='Postal code (optional)'
                          {...register('billingPostalCode')}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Continue Button - Mobile */}
              <div className='fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:hidden'>
                <button
                  type="submit"
                  className='w-full bg-primary text-white rounded-full py-3 font-medium hover:bg-primary/90 transition-colors'
                >
                  Continue to Payment
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
                  form="shipping-form"
                  className='w-full bg-primary text-white rounded-full py-3 font-medium hover:bg-primary/90 transition-colors'
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShippingPage