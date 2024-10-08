import { DashboardFilter } from "@/library/types"
import Link from "next/link"


type PropType = {
  handleTabChange: (tab: keyof typeof DashboardFilter) => void
  tab: keyof typeof DashboardFilter
}


const NavigationFilter = ({ handleTabChange, tab }: PropType) => {
  const MENUS = [
    "orders",
    "trade-ins",
    "profile",
    "favorites",
    "other"
  ]

  return <div className="mt-14 px-4 w-full max-w-2xl flex items-center justify-center mx-auto">
    <div>
      <ul
        className="mb-5 flex list-none flex-row border-b border-lightGray ps-0"
        role="tablist"
        data-twe-nav-ref>
        {MENUS?.map((item) => <li key={item} role="presentation">
          <button
            onClick={() => handleTabChange(item as keyof typeof DashboardFilter)}
            // href={`/dashboard?tab=${tab}`}
            className={`px-4 md:px-5 lg:px-7 border-b-2 transition-all delay-150 pb-[15px] pt-4 text-sm capitalize leading-tight ${tab === item ? "font-semibold text-black border-black" : "text-gray-500 font-medium border-transparent"}`}

          >
            {item}
          </button>
        </li>)}
      </ul>


    </div>
  </div>
}

export default NavigationFilter