"use client"
import NavigationFilter from '@/components/NavigationFilter'
import { DashboardFilter } from '@/library/types'
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import OrdersPage from './OrdersPage'
import ProfilePage from './ProfilePage'
import FavoritesPage from './FavoritesPage'
import TradeIns from './TradeIns'

export default function DashboardPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const dashboardTab = searchParams.get('tab') as keyof typeof DashboardFilter

  const [selectedTab, setSelectedTab] = useState(dashboardTab)

  const handleTabChange = (tab: keyof typeof DashboardFilter) => {
    setSelectedTab(tab)
    router.push(`/dashboard?tab=${tab.toString()}`)
  }

  useEffect(() => {
    console.log("dashboardTab", dashboardTab)

    if (dashboardTab) {
      setSelectedTab(dashboardTab)
    }
  }, [dashboardTab])


  const componentMap = {
    "orders": OrdersPage,
    "profile": ProfilePage,
    "favorites": FavoritesPage,
    "trade-ins": TradeIns,
    "other": TradeIns,
  }

  const SelectedComponent = componentMap[selectedTab] || OrdersPage

  return (
    <>
      <div className='w-full h-screen overflow-hidden overflow-y-scroll bg-bglight'>

        <NavigationFilter tab={selectedTab} handleTabChange={handleTabChange} />


        <SelectedComponent />


        <div className='h-10'></div>

      </div>
    </>
  )
}
