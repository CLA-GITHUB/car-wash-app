import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  buttonType: "button" | "submit";
  textColor?: "white" | "black";
  handleClick?: any;
  full?: boolean;
  red?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  textColor,
  handleClick,
  full,
  red,
}: ButtonProps) => {
  return (
    <button
      className={`${
        red ? "bg-[#D43F6B]" : "bg-[#8D9EFF]"
      } px-4 py-3 text-white font-semibold rounded drop-shadow-lg font-saria ${
        full && "w-full"
      }`}
      type={buttonType}
      onClick={handleClick && handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
