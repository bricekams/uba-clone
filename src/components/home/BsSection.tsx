"use client";

import React, { FC, useState } from "react";
import Button from "@/components/common/Button";

const solutions = [
  {
    image: "assets/images/others/UBA.jpeg",
    title: "The commodity meet security.",
    description:
      "With UBA, personal or business banking is easier on any device. Our digital solutions offer various benefits that will allow you to stay in control wherever you are.",
    href: "#",
  },
  {
    image: "assets/images/others/UBA-section-tab-payment.jpg",
    title: "Better features. More capabilities",
    description:
      "Take advantage of the many channels available to manage your finances, pay your bills, transfer funds, and more, at thousands of supported international merchants.",
    href: "#",
  },
  {
    image:
      "assets/images/others/UBA-section-tab-security-center-768x512a-300x200.jpg",
    title: "Scam alert. Non-disclosure notice.",
    description:
      "At UBA, keeping your information confidential and secure is a priority. Please note that your ATM card details, internet banking and PIN are confidential and should not be disclosed to anyone.",
    href: "#",
  },
];

const BsSection: FC = () => {
  const [current, _setCurrent] = useState(0);
  const currentStyle = "text-primary border-b-primary";
  const isCurrent = (index: number) => current === index;
  const solution = solutions[current];
  const setCurrent = (index: number) => {
    if (isCurrent(index)) return;
    _setCurrent(index);
  };

  return (
    <div className="py-16 bg-white text-black w-full">
      <div className="flex flex-col justify-center w-full items-center x-padding">
        <h2 className="text-4xl font-bold mb-12">
          Banking Solutions for your needs
        </h2>

        <div className="flex justify-center items-center [&>*]:px-10 w-full">
          <button
            type="button"
            onClick={() => setCurrent(0)}
            className={`${current === 0 ? currentStyle : "text-pale"} border-b-2 pb-6`}
          >
            Digital Solutions
          </button>
          <button
            onClick={() => setCurrent(1)}
            className={`${current === 1 ? currentStyle : "text-pale"} border-b-2  pb-6`}
            type="button"
          >
            Payment technologies
          </button>
          <button
            onClick={() => setCurrent(2)}
            className={`${current === 2 ? currentStyle : "text-pale"} border-b-2 pb-6`}
            type="button"
          >
            Safety information
          </button>
        </div>

        <div className="pt-5  w-full">
          <div className="!w-[500px] !h-[333px] float-start mr-5">
            <img src={solution.image} alt="image" className="w-full" />
          </div>
          <div className="w-fit">
            <h2 className="font-bold text-2xl mb-5">{solution.title}</h2>
            <p className="text-pale mb-5">{solution.description}</p>
            <Button primary label="Learn more" className="uppercase w-fit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BsSection;
