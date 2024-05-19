import React from "react";

type Props = {};

const Addon = (props: Props) => {
  return (
    <div className="flex flex-col gap-10 max-md:gap-5 w-full ">
      <header className="flex flex-col gap-1">
        <h1>Pick Add-ons</h1>
        <p className="sub-title">
          Add-ons help enhance your gaming experience.
        </p>
      </header>
      <section></section>
    </div>
  );
};

export default Addon;
