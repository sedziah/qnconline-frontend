import { ANIMATIONSTYLE } from "@/constants";
import { Warning2 } from "iconsax-react";
import React, { useEffect, useState } from "react";

// Define the props for the component
type Props = {
  handleNext: () => void; // Function to handle the "Next" button click
};

// Define the type for a Model
type Model = {
  model: string; // Model name
  storage: string[]; // Available storage options for the model
};

const DeviceForm = ({
  handleNext,
}: {
  handleNext: (value: string) => void;
}) => {
  const [selectedDevice, setSelectedDevice] = useState("");

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const deviceName = event.target.value;
    setSelectedDevice(deviceName);
  };
  // State to store available brands
  const [brands, setBrands] = useState<string[]>([]);
  // State to store the selected brand
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  // State to store models fetched for the selected brand
  const [models, setModels] = useState<Model[]>([]);
  // State to store the selected model
  const [selectedModel, setSelectedModel] = useState<string>("");
  // State to store storage options for the selected model
  const [storageOptions, setStorageOptions] = useState<string[]>([]);
  // State to store the selected storage option
  const [selectedStorage, setSelectedStorage] = useState<string>("");

  // Fetch the list of brands when the component mounts
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        // Fetch data from the brands file
        const response = await fetch("/data/mobile_brands.json");
        const data = await response.json();
        console.log("Fetched Brands:", data);
        // Extract the brand names and update state
        setBrands(data.map((brand: { name: string }) => brand.name));
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []); // Empty dependency array ensures this runs only once

  // Fetch models whenever the selected brand changes
  useEffect(() => {
    const fetchModels = async () => {
      if (selectedBrand) {
        try {
          // Fetch data from the specific brand's models file
          const response = await fetch(
            `/data/${selectedBrand.toLowerCase()}_models.json`
          );
          const data = await response.json();
          console.log("Fetched Models:", data);
          // Map the data to the Model type and update state
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
        // Reset models if no brand is selected
        setModels([]);
      }
    };

    fetchModels();
  }, [selectedBrand]); // Dependency on selectedBrand ensures this runs when it changes

  // Update storage options whenever a model is selected
  useEffect(() => {
    if (selectedModel) {
      // Find the selected model and update storage options
      const model = models.find((m) => m.model === selectedModel);
      setStorageOptions(model?.storage || []);
    } else {
      // Reset storage options if no model is selected
      setStorageOptions([]);
    }
  }, [selectedModel, models]); // Dependency on selectedModel and models ensures this runs when they change

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
          onChange={(e) => setSelectedBrand(e.target.value)} // Update selected brand
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
        <select
          className="bg-white border border-black text-black text-sm rounded-lg focus:ring-black outline-black focus:border-black block w-full px-2.5 py-3"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)} // Update selected model
          disabled={!models.length} // Disable dropdown if no models are available
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
          What's the storage capacity?
        </label>
        <select
          className="mt-4 bg-white border border-black text-black text-sm rounded-lg focus:ring-black outline-black focus:border-black block w-full px-2.5 py-3"
          value={selectedStorage}
          onChange={(e) => setSelectedStorage(e.target.value)} // Update selected storage
          disabled={!storageOptions.length} // Disable dropdown if no storage options are available
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
          disabled={!selectedModel || !selectedStorage} // Prevents proceeding without selection
          className="h-10 px-5 flex items-center justify-center text-white text-sm font-medium bg-primary rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DeviceForm;
