import React from "react";
import { IoMdClose } from "react-icons/io";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import FloatingButton from "../FloatingButton";

type PropType = {
  openFilter: boolean;
  toggleFilterDrawer: () => void;
  specifications: Record<string, string[]>;
  handleFiltersChange: (filters: Record<string, string[]>) => void;
  productCount: number;
};

const SORTOPTION = ["Bestsellers", "Price: Low to High", "Price: High to Low"];

export const ProductSortDrawer = ({
  openFilter,
  productCount,
  toggleFilterDrawer,
  specifications,
  handleFiltersChange,
}: PropType) => {
  return (
    <Drawer
      open={openFilter}
      onClose={toggleFilterDrawer}
      direction="bottom"
      zIndex={9999}
      className="h-full"
      size={"full"}
      style={{
        height: "100vh",
      }}
    >
      <div className="px-4 flex w-full bg-white z-50 fixed top-0 flex-row items-center justify-between">
        <button
          onClick={toggleFilterDrawer}
          className="w-10 h-10 text-3xl text-black"
        >
          <IoMdClose />
        </button>
        <h1 className="text-base text-black font-normal text-center">Sort</h1>
        <div className="w-16"></div>
      </div>

      {/* ✅ Show Available Specifications */}
      <div className="mt-16 px-4">
        <h2 className="text-sm font-bold mb-2">Specifications</h2>
        <ul className="space-y-2">
          {Object.entries(specifications).map(([key, values]) => (
            <li key={key} className="text-xs text-gray-600">
              <strong>{key}:</strong> {values.join(", ")}
            </li>
          ))}
        </ul>
      </div>

      <div className="h-full overflow-y-scroll flex flex-col space-y-3 w-full px-4 mt-4">
        {SORTOPTION.map((option) => (
          <button
            key={option}
            className="px-3 hover:bg-primary/10 py-4 flex flex-row items-center rounded-lg border border-bg-primary/10 gap-x-3"
          >
            <div className="w-5 h-5 rounded-full border items-center justify-between border-primary"></div>
            <span className="text-sm font-medium">{option}</span>
          </button>
        ))}
      </div>

      <FloatingButton
        label={`See all ${productCount} products`}
        onClick={toggleFilterDrawer}
      />
    </Drawer>
  );
};
