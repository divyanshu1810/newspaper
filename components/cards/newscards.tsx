import React, { FunctionComponent } from "react";

const Newscards: FunctionComponent = () => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mx-10 my-10">
      <div className="flex justify-center">
        <picture>
          <img className="w-full border-2 " src="/3415040.jpg" alt="Mountain" />
        </picture>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
      </div>
    </div>
  );
};

export default Newscards;
