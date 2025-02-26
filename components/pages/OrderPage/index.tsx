"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Box1, Calendar, Location, Receipt21, SearchNormal1, Sms, Truck, ShoppingBag } from 'iconsax-react'
import DefaultNavbar from '@/components/Navbars/DefaultNavbar'

type OrderStatus = 'processing' | 'shipped' | 'delivered' | 'cancelled'

interface OrderItem {
  id: string
  name: string
  quantity: number
  price: number
  image: string
}

interface Order {
  id: string
  orderNumber: string
  date: string
  status: OrderStatus
  total: number
  items: OrderItem[]
  shippingAddress: string
  trackingNumber?: string
}

const OrderPage = () => {
  const router = useRouter()
  const [selectedFilter, setSelectedFilter] = useState<OrderStatus | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const orders: Order[] = [
    {
      id: '1',
      orderNumber: 'QNC-ABC123',
      date: '2024-03-15',
      status: 'processing',
      total: 299.99,
      items: [
        {
          id: '1',
          name: 'Product 1',
          quantity: 2,
          price: 149.99,
          image: '/images/product1.jpg'
        }
      ],
      shippingAddress: '123 Main St, Accra, Ghana'
    },
    {
      id: '2',
      orderNumber: 'QNC-DEF456',
      date: '2024-03-14',
      status: 'shipped',
      total: 199.99,
      trackingNumber: 'TRK123456789',
      items: [
        {
          id: '2',
          name: 'Product 2',
          quantity: 1,
          price: 199.99,
          image: '/images/product2.jpg'
        }
      ],
      shippingAddress: '456 Oak St, Kumasi, Ghana'
    }
  ]

  const statusConfig = {
    processing: {
      color: 'bg-blue-500',
      icon: <Box1 className="w-4 h-4" />,
      progressWidth: 'w-1/4',
      description: 'Order is being processed'
    },
    shipped: {
      color: 'bg-primary',
      icon: <Truck className="w-4 h-4" />,
      progressWidth: 'w-2/4',
      description: 'Order is on the way'
    },
    delivered: {
      color: 'bg-green-500',
      icon: <Receipt21 className="w-4 h-4" />,
      progressWidth: 'w-full',
      description: 'Order has been delivered'
    },
    cancelled: {
      color: 'bg-red-500',
      icon: <Sms className="w-4 h-4" />,
      progressWidth: 'w-full',
      description: 'Order was cancelled'
    }
  }

  const filters = [
    { label: 'All Orders', value: 'all' as const },
    { label: 'Processing', value: 'processing' as const },
    { label: 'Shipped', value: 'shipped' as const },
    { label: 'Delivered', value: 'delivered' as const },
    { label: 'Cancelled', value: 'cancelled' as const }
  ]

  const filteredOrders = orders.filter(order => {
    const matchesFilter = selectedFilter === 'all' || order.status === selectedFilter
    const matchesSearch = order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const renderOrderCard = (order: Order) => {
    const status = statusConfig[order.status]

    return (
      <div key={order.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-semibold text-lg">Order #{order.orderNumber}</h3>
              <div className={`px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-2 ${status.color} shadow-sm`}>
                {status.icon}
                <span className="capitalize">{order.status}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(order.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1">
                <ShoppingBag className="w-4 h-4" />
                {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-6">
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full ${status.color} ${status.progressWidth} transition-all duration-500`} />
          </div>
          <p className="text-sm text-gray-500 mt-2">{status.description}</p>
        </div>

        <div className="border-t border-gray-100 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">{item.name}</h4>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  <p className="text-sm font-medium">₵{item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-start gap-3">
            <Location className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-gray-500 mb-1">Shipping Address</p>
              <p className="text-sm font-medium">{order.shippingAddress}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
            <span className="text-gray-600">Total:</span>
            <span className="font-semibold text-lg text-primary">₵{order.total.toFixed(2)}</span>
          </div>
        </div>

        {order.trackingNumber && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3 bg-primary/5 p-3 rounded-lg">
              <Truck className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Tracking Number</p>
                <p className="font-medium">{order.trackingNumber}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-bglight min-h-screen">
      <DefaultNavbar />
      <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="flex items-center text-sm font-medium text-gray-600 hover:text-primary transition-colors group bg-white p-2 rounded-lg hover:shadow-sm"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back
            </button>
            <div>
              <h1 className="text-2xl font-semibold mb-1">My Orders</h1>
              <p className="text-sm text-gray-500">{filteredOrders.length} orders found</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <SearchNormal1 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by order number or product name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${selectedFilter === filter.value
                    ? "bg-primary text-white shadow-sm shadow-primary/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {filter.label}
                  {filter.value !== 'all' && (
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-xs">
                      {filteredOrders.filter(order => order.status === filter.value).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {filteredOrders.map(renderOrderCard)}

          {filteredOrders.length === 0 && (
            <div className="bg-white rounded-xl p-12 text-center border border-gray-100">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Receipt21 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">No orders found</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                {searchQuery
                  ? "Try adjusting your search terms or filters to find what you're looking for"
                  : "You haven't placed any orders yet. Start shopping to see your orders here!"}
              </p>
              <button
                onClick={() => router.push('/shop')}
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Start Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OrderPage