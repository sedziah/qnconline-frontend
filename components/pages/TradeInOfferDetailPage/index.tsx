"use client";
import DefaultNavbar from "@/components/Navbars/DefaultNavbar";
import { TickCircle } from "iconsax-react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import React from "react";

// ✅ Trade-in Offer Calculation Function
const calculateTradeInOffer = (
  tradeInDetails: { label: string; value: string }[]
) => {
  let basePrice = 100; // Default base price

  const model =
    tradeInDetails.find((item) => item.label === "Model")?.value || "Unknown";
  const storage =
    tradeInDetails.find((item) => item.label === "Storage")?.value || "Unknown";
  const carrier =
    tradeInDetails.find((item) => item.label === "Carrier")?.value || "Unknown";
  const screenCondition =
    tradeInDetails.find((item) => item.label === "Screen Condition")?.value ||
    "Unknown";
  const appearance =
    tradeInDetails.find((item) => item.label === "Appearance")?.value ||
    "Unknown";
  const functionality =
    tradeInDetails.find((item) => item.label === "Functionality")?.value ||
    "Unknown";

  // ✅ Adjust base price based on the model
  const modelPricing = {
    "iPhone 13 Mini": 250,
    "iPhone 13 Pro": 400,
    "iPhone 12 Pro": 300,
  };
  basePrice = modelPricing[model] || basePrice;

  // ✅ Adjust based on storage capacity
  if (storage.includes("256GB")) basePrice += 30;
  if (storage.includes("512GB")) basePrice += 50;

  // ✅ Carrier impact (Unlocked is worth more)
  if (carrier === "Unlocked") basePrice += 20;
  if (carrier === "Sprint" || carrier === "T-Mobile") basePrice -= 10;

  // ✅ Screen condition impact
  const screenImpact = {
    Flawless: 0,
    Good: -10,
    Used: -30,
    Cracked: -80, // Big deduction for cracked screens
  };
  basePrice += screenImpact[screenCondition] || 0;

  // ✅ Appearance impact
  const appearanceImpact = {
    Flawless: 0,
    Good: -10,
    Used: -20,
    Cracked: -50,
  };
  basePrice += appearanceImpact[appearance] || 0;

  // ✅ Functionality impact
  if (functionality === "No") basePrice -= 50; // Non-functional devices are worth less

  return Math.max(basePrice, 0); // Ensure price never goes below 0
};

const TradeInOfferDetailPage = () => {
  const searchParams = useSearchParams();
  const { type, offerID } = useParams(); // Extract device model & offer ID

  // Extract trade-in details from URL
  const tradeInDetails = [
    { label: "Model", value: searchParams.get("Model") || type || "Unknown" },
    { label: "Storage", value: searchParams.get("Storage") || "Unknown" },
    { label: "Carrier", value: searchParams.get("Carrier") || "Unknown" },
    {
      label: "Screen Condition",
      value: searchParams.get("Screen Condition") || "Unknown",
    },
    { label: "Appearance", value: searchParams.get("Appearance") || "Unknown" },
    {
      label: "Functionality",
      value: searchParams.get("Functionality") || "Unknown",
    },
  ];

  // ✅ Calculate the trade-in offer
  const offerPrice = calculateTradeInOffer(tradeInDetails);

  return (
    <>
      <DefaultNavbar />
      <div className="w-full h-screen overflow-hidden overflow-y-scroll bg-bglight">
        <div className="w-full px-4 pt-28 max-w-xl mx-auto">
          <div className="border-b border-lightGray pb-3">
            <p className="text-base font-normal text-center text-black">
              See the offer
            </p>
          </div>

          <div className="mt-7">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black">
              🎉 Ta-da!
            </h1>

            <p className="text-sm mt-3 text-gray-600 font-normal leading-7">
              We found the best price offered among our partners. The
              refurbisher is ready to pay:{" "}
              <span className="font-bold">GHS {offerPrice.toFixed(2)}</span> for
              your{" "}
              <span className="font-bold">
                {tradeInDetails.find((item) => item.label === "Model")?.value}{" "}
                {tradeInDetails.find((item) => item.label === "Storage")?.value}{" "}
                {tradeInDetails.find((item) => item.label === "Carrier")?.value}
              </span>
              .
            </p>
          </div>

          <RenderButtonGroup />

          {/* Display Trade-in Details */}
          <div className="my-7 rounded-lg overflow-hidden border p-4 space-y-6 border-lightGray">
            {tradeInDetails.map((item) => (
              <div
                key={item.label}
                className="border-b border-lightGray/20 pb-3 flex flex-row items-center justify-between"
              >
                <p className="text-sm font-normal text-black">{item.label}</p>
                <p className="text-sm text-black font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-base mb-5 font-semibold text-black">
              Next steps
            </h3>

            <div className="mb-4 flex flex-row gap-4">
              <TickCircle size="20" color="#2f3137" />
              <div className="w-full">
                <p className="text-sm text-gray-600 font-medium">
                  Choose how to ship your item
                </p>
                <p className="text-sm mt-2 text-gray-600 font-normal">
                  You have 21 days to ship your item.
                </p>
              </div>
            </div>

            <div className="mb-4 flex flex-row gap-4">
              <TickCircle size="20" color="#2f3137" />
              <div className="w-full">
                <p className="text-sm text-gray-600 font-medium">
                  Add banking & ID info to receive your GHS {offerPrice.toFixed(2)}{" "}
                  payment
                </p>
                <p className="text-sm mt-2 text-gray-600 font-normal">
                  These details will only be used to verify your identity and
                  transfer your payment.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-base font-semibold text-black">
              One last thing...
            </h3>

            <p className="text-sm mt-3 text-gray-600 font-normal leading-7">
              Your device will be checked once the refurbisher receives it. If
              the information you&#39;ve provided is inaccurate, the refurbisher
              may send you a new offer. In any case, honesty is the best policy.
              We do not accept rooted, stolen, or counterfeit devices, and
              devices that have been blocked by a carrier.
            </p>
          </div>

          <RenderButtonGroup />
        </div>
      </div>
    </>
  );
};

const RenderButtonGroup = () => {
  const router = useRouter();
  return (
    <div className="my-5 flex justify-end">
      <button
        onClick={() => {
          router.push("/trade-in");
        }}
        className="px-6 border border-medium py-2 hover:bg-lightGray/30 text-sm font-semibold rounded-md text-black transition-all"
      >
        No Thanks
      </button>
      <button className="px-6 py-2 ml-4 bg-primary text-sm font-medium rounded-md text-white transition-all">
        Accept
      </button>
    </div>
  );
};

export default TradeInOfferDetailPage;
