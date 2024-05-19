"use client";

import React, { useState } from "react";
import AddonCard from "./AddonCard";

type Props = {};

type AddonType = {
  id: number;
  name: string;
  description: string;
  [key: string]: any;
};

const Addon = (props: Props) => {
  const [selectedAddons, setSelectedAddons] = useState<{
    [key: number]: AddonType;
  }>({});

  const addOns = [
    {
      id: 1,
      name: "Online serivce",
      description: "Access to multiplayer games",
      rate: 1,
    },
    {
      id: 2,
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      rate: 2,
    },
    {
      id: 3,
      name: "Customizable profile",
      description: "Cutom theme on your profile",
      rate: 2,
    },
  ];

  const handleAddOnsChange = (id: number) => {
    setSelectedAddons((prevAddons) => {
      const newAddons = { ...prevAddons };
      if (id in newAddons) {
        delete newAddons[id];
      } else {
        const addon = addOns.find((addon) => addon.id === id);
        if (addon) {
          newAddons[id] = addon;
        }
      }
      return newAddons;
    });
  };

  return (
    <div className="flex flex-col gap-10 max-md:gap-5 w-full ">
      <header className="flex flex-col gap-1">
        <h1>Pick Add-ons</h1>
        <p className="sub-title">
          Add-ons help enhance your gaming experience.
        </p>
      </header>
      <section className="flex flex-col gap-4">
        {addOns.map(({ name, description, rate, id }, index) => (
          <AddonCard
            id={id}
            name={name}
            description={description}
            rate={rate}
            isSelected={id in selectedAddons}
            onChange={handleAddOnsChange}
            key={`addon-key-${index}`}
          />
        ))}
      </section>
    </div>
  );
};

export default Addon;
