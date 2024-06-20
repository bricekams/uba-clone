import React, { FC } from "react";

const CountrySwitcher: FC = () => {
  return (
    <div className="flex gap-2 h-fit items-center">
      <div className="!h-4 !w-5">
        <img
          src="/assets/images/flag_cm.png"
          className="h-full w-full"
          alt=""
        />
      </div>
      <p>Cameroon</p>
    </div>
  );
};

export default CountrySwitcher;
