import { ANIMATIONSTYLE } from "@/constants";
import { Warning2 } from "iconsax-react";
import React, { useEffect, useState } from "react";

type Props = {
  handleNext: (selectedData: { label: string; value: string }) => void;
};

type Model = {
  model: string;
  storage: string[];
};

const DeviceForm = ({ handleNext }: Props) => {
  const [selectedDevice, setSelectedDevice] = useState("");

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const deviceName = event.target.value;
    setSelectedDevice(deviceName);
  };

  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [storageOptions, setStorageOptions] = useState<string[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string>("");

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("/data/mobile_brands.json");
        const data = await response.json();
        console.log("Fetched Brands:", data);
        setBrands(data.map((brand: { name: string }) => brand.name));
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    const fetchModels = async () => {
      if (selectedBrand) {
        try {
          const response = await fetch(
            `/data/${selectedBrand.toLowerCase()}_models.json`
          );
          const data = await response.json();
          console.log("Fetched Models:", data);
          setModels(
            data.map((model: Model) => ({
              model: model.model,
              storage: model.storage,
            }))
          );
        } catch (error) {
          console.error("Error fetching models:", error);
        }
      } else {
        setModels([]);
      }
    };

    fetchModels();
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedModel) {
      const model = models.find((m) => m.model === selectedModel);
      setStorageOptions(model?.storage || []);
    } else {
      setStorageOptions([]);
    }
  }, [selectedModel, models]);

  return (
    <div style={{ ...ANIMATIONSTYLE }} className="w-full transition">
      {/* Brand Selection Section */}
      <div style={{ ...ANIMATIONSTYLE }} className="my-7 transition">
        <label className="text-lg font-semibold text-black">
          What brand is your smartphone?
        </label>
        <select
          className="mt-4 bg-white border border-black text-black text-sm rounded-lg focus:ring-black outline-black focus:border-black block w-full px-2.5 py-3"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
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

      {/* Model Selection Section */}
      <div style={{ ...ANIMATIONSTYLE }} className="my-7 transition">
        <label className="text-lg font-semibold text-black">
          What&rsquo;s the specific title of your model?
        </label>
        <div
          style={{ ...ANIMATIONSTYLE }}
          className="my-5 bg-lightblue/70 rounded-lg p-4 flex flex-row gap-x-4"
        >
          <Warning2 size="24" color="#2f3137" />
          <div className="w-full">
            <p className="text-[13px] font-medium text-black">Find your model</p>
            <p className="text-black text-[13px] font-normal my-5">
              {`"Settings" > "About phone".`}
            </p>
            <p className="text-black text-[13px] font-normal">
              If your model doesn&rsquo;t appear in the list, it&rsquo;s not available for trade-in at this time.
            </p>
          </div>
        </div>
        <select
          className="bg-white border border-black text-black text-sm rounded-lg focus:ring-black outline-black focus:border-black block w-full px-2.5 py-3"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          disabled={!models.length}
        >
          <option value="" disabled selected>
            Select model
          </option>
          {models.map((model) => (
            <option key={model.model} value={model.model}>
              {model.model}
            </option>
          ))}
        </select>
      </div>

      {/* Storage Selection Section */}
      <div style={{ ...ANIMATIONSTYLE }} className="my-7 transition">
        <label className="text-lg font-semibold text-black">
          What&rsquo;s the storage capacity?
        </label>
        <select
          className="mt-4 bg-white border border-black text-black text-sm rounded-lg focus:ring-black outline-black focus:border-black block w-full px-2.5 py-3"
          value={selectedStorage}
          onChange={(e) => setSelectedStorage(e.target.value)}
          disabled={!storageOptions.length}
        >
          <option value="" disabled selected>
            Select storage capacity
          </option>
          {storageOptions.map((storage) => (
            <option key={storage} value={storage}>
              {storage}
            </option>
          ))}
        </select>
      </div>

      {/* Next Button Section */}
      <div
        style={{ ...ANIMATIONSTYLE }}
        className="my-7 transition flex items-end justify-end"
      >
        <button
          onClick={() => {
            handleNext({ label: "Model", value: selectedModel });
            handleNext({ label: "Storage", value: selectedStorage });
          }}
          disabled={!selectedModel || !selectedStorage}
          className="h-10 px-5 flex items-center justify-center text-white text-sm font-medium bg-primary rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DeviceForm;
