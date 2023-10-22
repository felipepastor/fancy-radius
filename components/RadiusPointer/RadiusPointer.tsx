"use client";
import React, { useState } from "react";
import { PointerCounter } from "../PointerCounter/PointerCounter";
import { PointerMinMax } from "../PointerMinMax/PointerMinMax";
import { LabelInfo } from "../LabelInfo/LabelInfo";
import { ControlsInput } from "../ControlsInput/ControlsInput";

export const RadiusPointer = () => {
  const [rotation, setRotation] = useState(0);
  const [rotationRange, setRotationRange] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  const handleRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const intValue = parseInt(event.target.value);
    setRotationRange(intValue);
    const degree = ((intValue - min) / (max - min)) * 360;

    setRotation(degree);
  };

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMin(parseInt(event.target.value));
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMax(parseInt(event.target.value));
  };

  return (
    <>
      <div className="w-circle h-circle bg-gray-200 rounded-full transform transition-transform flex justify-center items-center relative w-96 h-96 rotate-180">
        <PointerCounter count={rotation} />
        <PointerMinMax />
      </div>

      <LabelInfo label={rotationRange} />

      <ControlsInput
        min={min}
        max={max}
        rotationRange={rotationRange}
        handleMinChange={handleMinChange}
        handleMaxChange={handleMaxChange}
        handleRadiusChange={handleRadiusChange}
      />
    </>
  );
};
