"use client";

import React, { FC, forwardRef, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  className?: string;
  inputClassName?: string;
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ inputClassName = "", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={`${props.className} relative`}>
        {props.type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute text-gray-400 right-4 top-1/2 transform -translate-y-1/2"
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
        )}
        <input
          ref={ref}
          {...props}
          type={`${props.type === "password" ? (showPassword ? "text" : "password") : props.type}`}
          className={`${inputClassName} w-full input px-4 py-2 rounded-md focus:outline-1 focus:outline-gray-400`}
        />
        {props.error && (
          <p className="text-xs text-error mt-1 ml-1">{props.error}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
