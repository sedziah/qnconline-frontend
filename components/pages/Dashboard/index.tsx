"use client"
import React, { Suspense, useEffect, useState } from 'react'
import NavigationFilter from '@/components/NavigationFilter'
import { DashboardFilter } from '@/library/types'
import { useSearchParams, useRouter } from 'next/navigation'
import OrdersPage from './OrdersPage'
import ProfilePage from './ProfilePage'
import FavoritesPage from './FavoritesPage'
import TradeIns from './TradeIns'
import CreditPage from './CreditPage'

function DashboardContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const dashboardTab = searchParams.get('tab') as keyof typeof DashboardFilter

  const [selectedTab, setSelectedTab] = useState(dashboardTab)

  const handleTabChange = (tab: keyof typeof DashboardFilter) => {
    setSelectedTab(tab)
    router.push(`/dashboard?tab=${tab.toString()}`)
  }

  useEffect(() => {
    if (dashboardTab) {
      setSelectedTab(dashboardTab)
    }
  }, [dashboardTab])

  const componentMap = {
    "orders": OrdersPage,
    "profile": ProfilePage,
    "favorites": FavoritesPage,
    "trade-ins": TradeIns,
    "credit": CreditPage
  }

  const SelectedComponent = componentMap[selectedTab] || OrdersPage

  return (
    <>
      <NavigationFilter tab={selectedTab} handleTabChange={handleTabChange} />
      <SelectedComponent />
    </>
  )
}

export default function DashboardPage() {
  return (
    <div className='w-full  overflow-hidden overflow-y-scroll bg-bglight'>
      <Suspense fallback={<div>Loading...</div>}>
        <DashboardContent />
      </Suspense>
      <div className='h-10'></div>
    </div>
  )
}
