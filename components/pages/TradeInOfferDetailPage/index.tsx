"use client";
import DefaultNavbar from "@/components/Navbars/DefaultNavbar";
import { TickCircle } from "iconsax-react";
import { useRouter } from "next/navigation";
import React from "react";

const TradeInOfferDetailPage = () => {
  return (
    <>
      <DefaultNavbar />
      <div className="w-full h-screen overflow-hidden overflow-y-scroll bg-bglight">
        <div className="w-full  px-4 pt-28 max-w-xl mx-auto">
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
              <span className="font-bold">$70.00</span> for your{" "}
              <span className="font-bold">
                Fairphone Fairphone 4 256 GB T-Mobile.
              </span>
            </p>
          </div>

          <RenderButtonGroup />

          <div className="my-7 rounded-lg overflow-hidden border p-4 space-y-6 border-lightGray">
            <div className="border-b border-lightGray/20 pb-3 flex flex-row items-center justify-between">
              <p className="text-sm font-normal text-black">Screen</p>
              <p className="text-sm text-black font-semibold">Good</p>
            </div>
            <div className="border-b border-lightGray/20 pb-3 flex flex-row items-center justify-between">
              <p className="text-sm font-normal text-black">Sides</p>
              <p className="text-sm text-black font-semibold">Good</p>
            </div>
            <div className="pb-3 flex flex-row items-center justify-between">
              <p className="text-sm font-normal text-black">Functional</p>
              <p className="text-sm text-black font-semibold">Good</p>
            </div>
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
                  Add banking & ID info to receive your $70.00 payment
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
      <button className="px-6  py-2 ml-4 bg-primary text-sm font-medium rounded-md text-white  transition-all">
        Accept
      </button>
    </div>
  );
};

export default TradeInOfferDetailPage;
