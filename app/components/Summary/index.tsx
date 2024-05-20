import React from "react";

type Props = {};

const AddOnsList = ({ name, rate }: { name: string; rate: number }) => {
  return (
    <div className="flex justify-between">
      <span className="text-sm text-cool-gray">{name}</span>
      <span className="text-sm font-semibold text-marine-blue">
        +${rate}/mo
      </span>
    </div>
  );
};

const Summary = (props: Props) => {
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
                Arcade (Monthly)
              </span>
              <a className="text-sm underline text-cool-gray">Change</a>
            </div>
            <span className="text-sm font-bold text-marine-blue">$9/mo</span>
          </div>
          <hr className="bg-cool-gray" />
          <AddOnsList name="Online service" rate={1} />
          <AddOnsList name="Larger storate" rate={2} />
        </div>

        <div className="flex justify-between px-3">
          <span className="text-sm text-cool-gray">Total (per month)</span>
          <span className="text-base md:text-lg text-purplish-blue font-bold">
            +$120/mo
          </span>
        </div>
      </section>
    </div>
  );
};

export default Summary;
