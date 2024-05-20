"use client";

import { FREE_MONTHS } from "@/app/constants";
import { FormHookContext } from "../../Steps";
import { useContext } from "react";

type Props = {
  isSelected: boolean;
  name: string;
  id: number;
  description: string;
  rate: number;
  onChange: (id: number) => void;
};

const AddonCard = ({
  isSelected = false,
  id,
  name,
  description,
  rate,
  onChange,
}: Props) => {
  const { formHook } = useContext(FormHookContext);
  const { watch } = formHook;
  const isYearly = watch("isYearly");
  return (
    <button
      className={`flex cursor-pointer    items-center p-3 rounded-lg border border-light-gray gap-4 
      ${isSelected ? "bg-magnolia border-marine-blue" : "bg-white"}`}
      onClick={() => onChange(id)}
    >
      <div
        className={`flex justify-center border border-light-gray items-center rounded-sm p-1 aspect-square 
      ${isSelected ? "bg-purplish-blue border-transparent" : "bg-white "}
      `}
      >
        <img src="/assests/images/icon-checkmark.svg" alt="" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-sm font-medium text-marine-blue">{name}</span>
        <span className="text-sm font-thin text-cool-gray">{description}</span>
      </div>
      <span className="text-sm ml-auto  text-purplish-blue">{`${
        !isYearly ? `+$${rate}/mo` : `+$${rate * (12 - FREE_MONTHS)}/yr`
      }`}</span>
    </button>
  );
};

export default AddonCard;
