import React, { FC, ReactNode } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  label?: string;
  icon?: ReactNode;
}

const Button: FC<Props> = ({ primary, label, icon, ...props }) => {
  return (
    <button
      {...props}
      className={`${props.className} active:text-white active:scale-90 transition-all duration-75 hover:ease-in flex justify-center gap-2 items-center rounded-md font-bold px-4 py-2 ${primary ? "primary-gradient text-white" : ""}`}
    >
      {!!icon && icon}
      {label}
    </button>
  );
};

export default Button;
