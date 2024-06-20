import { CONFIG } from "@/config/app.config";
import React, { FC } from "react";

const DigitalBankCard: FC = () => {
  const buttonClassName =
    "w-28 py-2 border rounded-md uppercase border-white hover:bg-white hover:text-black hover:ease-in duration-[400ms]";

  return (
    <div className="backdrop-blur-xs text--white">
      <div className="bg-black/25 w-full px-10 py-7 flex flex-col items-center">
        <p className="mb-2 text-xl uppercase font-bold">DIGITAL BANKING</p>
        <div className="mb-2 flex gap-4 ">
          <button className={buttonClassName} type="button">
            STAFF
          </button>
          <button className={buttonClassName} type="button">
            BUSINESS
          </button>
        </div>
      </div>
      <div className="bg-primary-end/60 w-full px-10 py-7">
        <ul className="flex flex-col">
          {CONFIG.links.dgBankCard.map((l, i) => {
            const last = i === CONFIG.links.dgBankCard.length - 1;
            const first = i === 0;

            return (
              <li
                key={i}
                className={`${first ? "" : "pt-4"} ${last ? "" : "border-b border-b-white pb-4"} hover:ease-in hover:pl-2 duration-100`}
              >
                <a href={l.href ?? "#"} className="font-roboto text-sm">
                  {l.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DigitalBankCard;
