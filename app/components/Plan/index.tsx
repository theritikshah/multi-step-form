"use client";

import React, { useState } from "react";
import PlanCard from "./PlanCard";
import Toggle from "../common/Toggle";

type Props = {};

const Plan = (props: Props) => {
  const [isYearly, setIsYearly] = useState(false);
  const [activePlan, setActivePlan] = useState(0);

  const handleToggle = (value: boolean) => {
    setIsYearly(value);
  };

  const plans = [
    { name: "Arcade", rate: 9, image: "/assests/images/icon-arcade.svg" },
    { name: "Advance", rate: 12, image: "/assests/images/icon-advanced.svg" },
    { name: "Pro", rate: 15, image: "/assests/images/icon-pro.svg" },
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
        {plans.map(({ name, image, rate }, index) => (
          <PlanCard
            key={`plan-card-${index}`}
            name={name}
            image={image}
            price={rate}
            isYearly={isYearly}
            isActive={index == activePlan}
            onClick={() => setActivePlan(index)}
          />
        ))}
      </section>
      <footer className="flex gap-5 justify-center rounded-lg p-4 bg-alabaster">
        <span className={`text-sm ${monthColor}`}>Monthly</span>
        <Toggle handleChange={handleToggle} />
        <span className={`text-sm ${toggleYearColor}`}>Yearly</span>
      </footer>
    </div>
  );
};

export default Plan;
