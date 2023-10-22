import React from "react";

type LabelInfoProps = {
  label: string | number;
};

export const LabelInfo: React.FC<LabelInfoProps> = ({ label }) => {
  return (
    <h1 className="mt-10 mb-5 text-5xl">
      {label}
      <span>&#176;</span>
    </h1>
  );
};
