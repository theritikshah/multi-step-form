"use client";

import { FREE_MONTHS } from "@/app/constants";

type Props = {
  image: string;
  name: string;
  price: number;
  isYearly: boolean;
  isActive: boolean;
  onClick: () => void;
};

const PlanCard = ({
  image,
  name,
  price,
  isYearly,
  isActive,
  onClick,
}: Props) => {
  return (
    <button
      // className={`flex md:flex-col md:pr-8 md:min-w-32 md:gap-6 gap-3 rounded-lg border border-light-gray p-4 w-full
      className={`flex md:flex-col md:flex-1  md:gap-6 gap-3 rounded-lg border border-light-gray p-4 w-full
    ${isActive && "border border-marine-blue bg-magnolia"}
    `}
      onClick={onClick}
    >
      <img className="aspect-square md:w-10" src={image} alt="" />
      <div className="flex flex-col gap-1 justify-start items-start">
        <span className="text-marine-blue text-sm font-medium">{name}</span>
        <span className="text-cool-gray text-sm">
          {`$${isYearly ? price * (12 - FREE_MONTHS) + "/yr" : price + "/mo"}`}
        </span>
        {isYearly && (
          <span className="text-xs text-marine-blue">2 Months free</span>
        )}
      </div>
    </button>
  );
};

export default PlanCard;
