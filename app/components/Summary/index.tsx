"use client";
import React, { useContext } from "react";
import { FormHookContext, FormType } from "../Steps";
import { FREE_MONTHS } from "@/app/constants";
import { getRate } from "@/app/utils";
import Link from "next/link";

type Props = {};

const AddOnsList = ({
  name,
  rate,
  isYearly,
}: {
  name: string;
  rate: number;
  isYearly: boolean;
}) => {
  const planRate = getRate(rate, isYearly);

  return (
    <div className="flex justify-between">
      <span className="text-sm text-cool-gray">{name}</span>
      <span className="text-sm font-semibold text-marine-blue">
        +${planRate}/{isYearly ? "yr" : "mo"}
      </span>
    </div>
  );
};

const Summary = (props: Props) => {
  const { formHook } = useContext(FormHookContext);
  const { getValues } = formHook;

  const { selectedPlan, selectedAddons, isYearly }: FormType = getValues();

  const planRate = (selectedPlan && getRate(selectedPlan.rate, isYearly)) || 0;
  const addonsRate =
    selectedAddons &&
    Object.values(selectedAddons)
      .map(({ rate }) => rate)
      ?.reduce((acc: number, rate) => acc + getRate(rate, isYearly), 0);

  const totalRate = planRate + addonsRate;

  return (
    <div className="flex flex-col gap-10 max-md:gap-5 w-full ">
      <header className="flex flex-col gap-1">
        <h1>Finishing up</h1>
        <p className="sub-title">
          Double-check everything looks OK before confiming.
        </p>
      </header>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col justify-between gap-3 p-3 bg-alabaster rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-marine-blue">
                {selectedPlan.name} {isYearly ? "(Yearly)" : "(Monthly)"}
              </span>
              <Link
                href="/select-plan"
                className="text-sm underline text-cool-gray"
              >
                Change
              </Link>
            </div>
            <span className="text-sm font-bold text-marine-blue">
              ${planRate}/{isYearly ? "yr" : "mo"}
            </span>
          </div>
          <hr className="bg-cool-gray" />
          {Object.values(selectedAddons).map((addon) => {
            return (
              <AddOnsList
                name={addon.name}
                rate={addon.rate}
                isYearly={isYearly}
              />
            );
          })}
        </div>

        <div className="flex justify-between px-3">
          <span className="text-sm text-cool-gray">Total (per month)</span>
          <span className="text-base md:text-lg text-purplish-blue font-bold">
            {isYearly ? `$${totalRate}/yr` : `+$${totalRate}/mo`}
          </span>
        </div>
      </section>
    </div>
  );
};

export default Summary;
