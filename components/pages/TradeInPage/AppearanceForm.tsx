import { ANIMATIONSTYLE } from "@/constants";
import React, { useState } from "react";

type Props = {
  handleNext: (selectedData: { label: string; value: string }) => void;
};

const conditionOptions = [
  {
    title: "Cracked",
    description:
      "Shows visible signs of wear, including deep scratches, cracks and/or dents on the outside of the item.",
  },
  {
    title: "Used",
    description:
      "Visible signs of wear, including deep scratches and/or dents on the outside of the device, which do not affect its functionality. No cracks.",
  },
  {
    title: "Good",
    description:
      "A few faint signs of wear, not noticeable from 8 inches away. No cracks or dents.",
  },
  {
    title: "Flawless",
    description: "Flawless appearance with no visible scratches.",
  },
];

const AppearanceForm = ({ handleNext }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div style={{ ...ANIMATIONSTYLE }} className="w-full transition">
      <div className="my-7">
        <h1 className="text-lg font-semibold text-black">
          How do the sides and back look?
        </h1>
      </div>
      <div className="my-7">
        <div className="space-y-5">
          {conditionOptions?.map((condition) => (
            <button
              key={condition?.title}
              onClick={() => setSelectedOption(condition?.title)}
              className={`w-full transition-opacity my-2 gap-x-3 flex flex-row justify-between rounded-md p-5 border hover:bg-[#bde0fe]/10 hover:border-l[#bde0fe]/40 bg-white`}
            >
              {selectedOption === condition?.title ? (
                <div className="w-5 h-5 border flex flex-row items-center justify-center bg-primary border-primary rounded-full">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
                </div>
              ) : (
                <div className="w-5 h-5 border border-primary rounded-full"></div>
              )}

              <div className="flex-1 text-left">
                <p
                  className={`${
                    selectedOption === condition?.title
                      ? "font-bold"
                      : "font-normal"
                  } text-sm text-black`}
                >
                  {condition?.title}
                </p>
                <p className="font-normal text-[13px] mt-2 text-gray-500">
                  {condition?.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div
        style={{ ...ANIMATIONSTYLE }}
        className="my-7 transition flex items-end justify-end"
      >
        <button
          onClick={() => {
            if (selectedOption) {
              handleNext({ label: "Appearance", value: selectedOption });
            }
          }}
          disabled={!selectedOption} // Prevent proceeding without selection
          className="h-10 px-5 flex items-center justify-center text-white text-sm font-medium bg-primary rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AppearanceForm;
