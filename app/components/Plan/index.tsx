"use client";

import React, { useContext, useState } from "react";
import PlanCard from "./PlanCard";
import Toggle from "../common/Toggle";
import { FormHookContext } from "../Steps";

type Props = {};

const Plan = (props: Props) => {
  const { formHook } = useContext(FormHookContext);
  const { watch, setValue, getValues } = formHook;

  const isYearly = watch("isYearly");
  const selectedPlan = watch("selectedPlan");

  const handleToggle = (value: boolean) => {
    setValue("isYearly", value);
  };

  const plans = [
    {
      id: 1,
      name: "Arcade",
      rate: 9,
      image: "/assests/images/icon-arcade.svg",
    },
    {
      id: 2,
      name: "Advance",
      rate: 12,
      image: "/assests/images/icon-advanced.svg",
    },
    { id: 3, name: "Pro", rate: 15, image: "/assests/images/icon-pro.svg" },
  ];

  const monthColor = isYearly ? "text-cool-gray" : "text-marine-blue";
  const toggleYearColor = !isYearly ? "text-cool-gray" : "text-marine-blue";

  return (
    <div className="flex flex-col gap-5 md:gap-8 w-full">
      <header className="flex flex-col gap-1">
        <h1>Select your plan</h1>
        <p className="sub-title">
          You have the option of monthly of yearly billing.
        </p>
      </header>
      <section className="flex flex-col md:flex-row gap-3 w-full">
        {plans.map(({ id, name, image, rate }, index) => (
          <PlanCard
            key={id}
            name={name}
            image={image}
            price={rate}
            isYearly={isYearly}
            isActive={selectedPlan && id == selectedPlan.id}
            onClick={() => setValue("selectedPlan", plans[index])}
          />
        ))}
      </section>
      <footer className="flex gap-5 justify-center rounded-lg p-4 bg-alabaster">
        <span className={`text-sm ${monthColor}`}>Monthly</span>
        <Toggle handleChange={handleToggle} value={isYearly} />
        <span className={`text-sm ${toggleYearColor}`}>Yearly</span>
      </footer>
    </div>
  );
};

export default Plan;
