import React from 'react';

type NewFilterCardProps = {
  label: string;
  options: string[];
  selectedOptions: string[];
  onChange: (option: string, isChecked: boolean) => void;
};

const NewFilterCard: React.FC<NewFilterCardProps> = ({
  label,
  options,
  selectedOptions,
  onChange
}) => {
  return (
    <div className='mb-10'>
      {/* Filter Label */}
      <div className="flex space-x-2">
        <p className="text-sm leading-5 font-medium text-gray-800">{label}</p>
      </div>

      {/* Filter Options */}
      <div className="space-y-3 mt-4">
        {options.map((option) => (
          <div key={option} className="flex">
            {/* Checkbox */}
            <input
              className="w-5 h-5 rounded-2xl mr-2 checked:bg-[#000]"  // Checkbox styling
              type="checkbox"
              checked={selectedOptions.includes(option)}  // Check if the option is selected
              onChange={(e) => onChange(option, e.target.checked)}  // Trigger onChange when checkbox is clicked
            />

            {/* Label for each option */}
            <div className="mt-1 inline-block">
              <div className="flex space-x-6 justify-center items-center">
                <label className="mr-2 text-sm leading-3 font-normal text-gray-600">
                  {option}
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewFilterCard;
