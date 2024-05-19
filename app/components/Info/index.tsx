import React from "react";
import Input from "../common/Input";
import Label from "../common/Label";

type Props = {};

const Info = (props: Props) => {
  return (
    <div className="flex flex-col gap-10 max-md:gap-5 w-full ">
      <header className="flex flex-col gap-1">
        <h1>Personal Info</h1>
        <p className="sub-title">
          Please provide your name, address, and phone number.
        </p>
      </header>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" placeholder="e.g. Stephen King" />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            name="address"
            placeholder="e.g. StephenKing@lorem.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="phone-number">Phone Number</Label>
          <Input
            type="text"
            name="phone-number"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </div>
  );
};

export default Info;
