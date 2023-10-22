import React from "react";

type ControlsInputProps = {
  min: number;
  max: number;
  rotationRange: number;
  handleMinChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRadiusChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ControlsInput: React.FC<ControlsInputProps> = ({
  min,
  max,
  rotationRange,
  handleMinChange,
  handleMaxChange,
  handleRadiusChange,
}) => {
  return (
    <div className="grid gap-2">
      <label
        htmlFor="min_value"
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        Min value
      </label>

      <input
        type="text"
        id="min_value"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="0"
        required
        value={min}
        onChange={handleMinChange}
      />
      <label
        htmlFor="max_value"
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        Max value
      </label>
      <input
        type="text"
        id="max_value"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="100"
        required
        value={max}
        onChange={handleMaxChange}
      />
      <label
        htmlFor="set_value"
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        Set Value
      </label>
      <input
        id="set_value"
        type="range"
        min={min}
        max={max}
        value={rotationRange}
        onChange={handleRadiusChange}
        className="range accent-cyan-500"
      />
    </div>
  );
};
