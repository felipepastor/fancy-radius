import React from "react";

type LabelInfoProps = {
  label: string | number;
};

export const LabelInfo: React.FC<LabelInfoProps> = ({ label }) => {
  return (
    <h2 className="mt-10 mb-5">
      {label}
      <span>&#176;</span>
    </h2>
  );
};
