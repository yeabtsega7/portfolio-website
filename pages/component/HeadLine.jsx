import React from "react";

const HeadLine = ({ line }) => {
  return (
    <div className="flex flex-col pb-6">
      <div className="text-color-p text-4xl font-bold font-Nova-Cut p-1">
        {line}
      </div>
      <div className=" w-20 h-1 bg-m mb-1"></div>
      <div className=" w-10 h-1 bg-m mb-1"></div>
    </div>
  );
};

export default HeadLine;
