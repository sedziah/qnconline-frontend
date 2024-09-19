import React from 'react';

type NewFilterCardProps = {
  label: string;
  options: string[];
  selectedOption: string;
  onChange: (option: string, isChecked: boolean) => void;
};

const NewFilterCard: React.FC<NewFilterCardProps> = ({
  label,
  options,
  selectedOption,
  onChange
}) => {
  return (
    <div>
      <h3>{label}</h3>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              checked={selectedOption.includes(option)}
              onChange={(e) => onChange(option, e.target.checked)}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default NewFilterCard;
