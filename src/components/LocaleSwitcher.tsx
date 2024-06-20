"use client";

import React, { FC } from "react";

const LocaleSwitcher: FC = () => {
  return (
    <select className="border-2 border-gray-500 p-1 h-fit bg-transparent focus:border-gray-500 focus:outline-none">
      <option value="en">English</option>
      <option value="fr">Francais</option>
    </select>
  );
};

export default LocaleSwitcher;

// <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
// <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
// </svg>
