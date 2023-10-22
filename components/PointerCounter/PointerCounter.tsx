import React from "react";

interface PointerCounterProps {
  count: number;
}

export const PointerCounter: React.FC<PointerCounterProps> = ({ count }) => {
  const min = 40;
  const max = 320;
  const rotation = count >= max ? max : count <= min ? min : count;

  return (
    <div
      className="w-2 bg-black h-1/2 -mt-[50%] rotate-0 origin-bottom"
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};
