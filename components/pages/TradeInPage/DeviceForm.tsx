import { ANIMATIONSTYLE } from "@/constants";
import { Warning2 } from "iconsax-react";
import React, { useEffect, useState } from "react";

type Props = {
  handleNext: () => void;
};

const DeviceForm = ({ handleNext }: Props) => {
  const [brands, setBrands] = useState<string[]>([]); // State for storing fetched brands
  const [selectedBrand, setSelectedBrand] = useState<string>(""); // State for selected brand

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("/data/mobile_brands.json"); // Adjust the path if needed
        const data = await response.json();
        console.log("Fetched Brands:", data);
        setBrands(data.map((brand: { name: string }) => brand.name)); // Extract the brand names
      } catch (error) {
        console.error("Error fetching brands:", error); // Error handling
      }
    };

    fetchBrands();
  }, []);

  return (
    <div style={{ ...ANIMATIONSTYLE }} className="w-full transition">
      <div style={{ ...ANIMATIONSTYLE }} className="my-7 transition">
        <label className="text-lg font-semibold text-black">
          What brand is your smartphone?
        </label>

        <select
          className="mt-4 bg-white border border-black text-black text-sm rounded-lg focus:ring-black outline-black focus:border-black block w-full px-2.5 py-3"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)} // Handle brand selection
        >
          <option value="" disabled selected>
            Select one brand
          </option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select> 
      </div>

      <div style={{ ...ANIMATIONSTYLE }} className="my-7 transition">
        <label className="text-lg font-semibold text-black">
          What&#39;s the model of your Blackberry?
        </label>

        <select className="mt-4 bg-white border border-black text-black text-sm rounded-lg focus:ring-black outline-black focus:border-black block w-full px-2.5 py-3  ">
          <option selected>Select model type</option>
          <option value="Blackberry">Blackberry</option>
          <option value="Blackberry">Blackberry</option>
          <option value="Blackberry">Blackberry</option>
          <option value="Blackberry">Blackberry</option>
        </select>
      </div>

      <div style={{ ...ANIMATIONSTYLE }} className="my-7 transition">
        <label className="text-lg font-semibold text-black">
          What’s the specific title of your model?
        </label>

        <div
          style={{ ...ANIMATIONSTYLE }}
          className="my-5 bg-lightblue/70 rounded-lg p-4 flex flex-row gap-x-4"
        >
          <Warning2 size="24" color="#2f3137" />
          <div className="w-full">
            <p className="text-[13px] font-medium text-black">
              Find your model
            </p>

            <p className="text-black text-[13px] font-normal my-5">
              {"“Settings” > “About phone”."}
            </p>

            <p className="text-black text-[13px] font-normal">
              {
                "If your model doesn’t appear in the list, it’s not available for trade-in at this time."
              }
            </p>
          </div>
        </div>

        <select className=" bg-white border border-black text-black text-sm rounded-lg focus:ring-black outline-black focus:border-black block w-full px-2.5 py-3  ">
          <option selected>Select model</option>
          <option value="Blackberry">Blackberry</option>
          <option value="Blackberry">Blackberry</option>
          <option value="Blackberry">Blackberry</option>
          <option value="Blackberry">Blackberry</option>
        </select>
      </div>

      <div
        style={{ ...ANIMATIONSTYLE }}
        className="my-7 transition flex items-end justify-end"
      >
        <button
          onClick={handleNext}
          className="h-10 px-5 flex items-center justify-center text-white text-sm font-medium bg-primary rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DeviceForm;
