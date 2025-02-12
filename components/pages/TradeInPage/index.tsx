/* eslint-disable @next/next/no-img-element */
"use client";
import DefaultNavbar from "@/components/Navbars/DefaultNavbar";
import { ArrowLeft } from "iconsax-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FunctionalityForm } from "./FunctionalityForm";
import DeviceForm from "./DeviceForm";
import AppearanceForm from "./AppearanceForm";
import CarrierForm from "./CarrierForm";
import ScreenConditionForm from "./ScreenConditionForm";

const TradeInPage = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = [
    "Your device",
    "Carrier",
    "Screen condition",
    "Appearance",
    "Functionality",
  ];
  // Will be sent dynamically based on the trade in type

  // state to hold the data as an array
  const [listItems, setListItems] = useState<
    { label: string; value: string }[]
  >([]);

  const handleNext = (selectedData?: { label: string; value: string }) => {
    if (selectedData) {
      setListItems((prevList) => {
        const existingIndex = prevList.findIndex(
          (item) => item.label === selectedData.label
        );

        if (existingIndex !== -1) {
          const updatedList = [...prevList];
          updatedList[existingIndex] = selectedData;
          return updatedList;
        }

        return [...prevList, selectedData];
      });
    }

    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      console.log("🔹 Attempting to navigate with dynamic routing...");

      // ✅ Extract the selected device model from listItems
      const deviceModel =
        listItems.find((item) => item.label === "Model")?.value || "unknown";

      // ✅ Generate a dynamic offerID (random or from backend)
      const offerID = Math.floor(Math.random() * 100000).toString(); // Example: Generate a random ID

      // ✅ Convert listItems to query parameters
      const queryParams = new URLSearchParams();
      listItems.forEach((item) => {
        queryParams.append(item.label, item.value);
      });

      console.log(
        "Navigating to:",
        `/trade-in/${deviceModel}/${offerID}?${queryParams.toString()}`
      );

      // ✅ Navigate to the correct dynamic route
      router.push(
        `/trade-in/${deviceModel}/${offerID}?${queryParams.toString()}`
      );
    }
  };

  // const handleNext = (selectedData?: { label: string; value: string }) => {
  //   if (selectedData) {
  //     setListItems((prevList) => {
  //       const existingIndex = prevList.findIndex(
  //         (item) => item.label === selectedData.label
  //       );

  //       if (existingIndex !== -1) {
  //         const updatedList = [...prevList];
  //         updatedList[existingIndex] = selectedData;
  //         return updatedList;
  //       }

  //       return [...prevList, selectedData];
  //     });
  //   }

  //   if (activeStep < steps.length - 1) {
  //     setActiveStep(activeStep + 1);
  //   } else {
  //     // Convert listItems to query parameters
  //     const queryParams = new URLSearchParams();
  //     listItems.forEach((item) => {
  //       queryParams.append(item.label, item.value);
  //     });

  //     console.log("Navigating with:", queryParams.toString()); // ✅ Debugging log

  //     // Navigate to the offer page with trade-in data
  //     // router.push(`/trade-in/offer?${queryParams.toString()}`);
  //     router.push(`/trade-in/device-name/offerID?Model=iPhone12Pro&Storage=128GB&Carrier=Unlocked`);
  //   }
  // };

  // const handleNext = (selectedData?: { label: string; value: string }) => {
  //   if (selectedData) {
  //     setListItems((prevList) => {
  //       const existingIndex = prevList.findIndex(
  //         (item) => item.label === selectedData.label
  //       );
  //       if (existingIndex !== -1) {
  //         // Update existing item
  //         const updatedList = [...prevList];
  //         updatedList[existingIndex] = selectedData;
  //         return updatedList;
  //       }
  //       // Add new item
  //       return [...prevList, selectedData];
  //     });
  //   }

  //   if (activeStep < steps.length - 1) {
  //     setActiveStep(activeStep + 1);
  //   } else {
  //     // Serialize listItems to a query string
  //     const queryParams = new URLSearchParams();
  //     listItems.forEach((item) => {
  //       queryParams.append(item.label, item.value);
  //     });

  //     // ✅ Log the serialized query string
  //     console.log("Serialized Trade-in Data:", queryParams.toString());

  //     // let device = "unknown";
  //     // let offerID = "unknown";
  //     // router.push(`/trade-in/${device}/${offerID}`);
  //   }
  // };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    } else {
      router.back();
    }
  };

  return (
    <>
      <DefaultNavbar />
      <div className=" w-full grid grid-cols-1 lg:grid-cols-3">
        <div className="hidden lg:block w-full h-screen max-h-full overflow-hidden overflow-y-scroll bg-lightGray/20 pt-28   ">
          <div className="max-w-lg mx-auto w-full px-4 lg:px-20">
            <button
              onClick={handleBack}
              className="flex flex-row items-center gap-x-2"
            >
              <ArrowLeft size="20" color="#000" />
              <p className="font-semibold text-sm underline text-black">
                {activeStep === 0 ? "Back" : steps[activeStep - 1]}
              </p>
            </button>

            <div className="mt-10 transition-all bg-white w-full rounded-md shadow-sm p-5">
              {listItems?.map((item, index) => (
                <div
                  key={index}
                  className={`py-4 capitalize flex flex-row items-center justify-between ${
                    index !== 0 ? "border-t border-lightGray/20" : ""
                  }`}
                >
                  <p className="text-sm font-medium text-gray-500">
                    {item?.label}
                  </p>
                  <p className="text-sm text-black font-semibold">
                    {item?.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-20">
              <img
                src="https://front-office.statics.backmarket.com/7c1d68ac99eade219e3285af64697c7d0989886e/img/buyback/buybackFunnel.svg"
                alt=""
                className="w-full h-36 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="w-full col-span-2 h-screen max-h-full overflow-hidden overflow-y-scroll bg-bglight pt-28 px-4 ">
          <div className="w-full max-w-2xl mx-auto">
            <RenderHeader
              activeStep={activeStep}
              handleBack={handleBack}
              steps={steps}
            />

            <div className="mt-10">
              {
                {
                  "Your device": <DeviceForm handleNext={handleNext} />,
                  Carrier: <CarrierForm handleNext={handleNext} />,
                  "Screen condition": (
                    <ScreenConditionForm handleNext={handleNext} />
                  ),
                  Appearance: <AppearanceForm handleNext={handleNext} />,
                  Functionality: <FunctionalityForm handleNext={handleNext} />,
                }[steps[activeStep]]
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const RenderHeader = ({
  handleBack,
  activeStep,
  steps,
}: {
  steps: any[];
  activeStep: number;
  handleBack: () => void;
}) => (
  <div className="w-full">
    <div className="w-full flex flex-row items-center justify-between">
      <button
        onClick={handleBack}
        className="flex lg:hidden h-10 w-10 rounded-full items-center justify-center transition-opacity hover:bg-bglight"
      >
        <ArrowLeft size="27" color="#000" />
      </button>
      <div className="hidden lg:block"></div>

      <p className="text-center text-base font-normal">
        {`${activeStep + 1}/${steps?.length} ${steps[activeStep]}`}
      </p>
      <div></div>
    </div>

    <div className="mt-6 h-0.5 rounded-full w-full bg-lightGray/40">
      <div
        style={{
          width: `${((activeStep + 1) / steps?.length) * 100}%`,
        }}
        className={`h-0.5 rounded-full bg-primary`}
      />
    </div>
  </div>
);

export default TradeInPage;
