"use client";

import React, { useContext } from "react";
import Input from "../common/Input";
import Label from "../common/Label";
import { FormHookContext } from "../Steps";
import { Controller } from "react-hook-form";

type Props = {};

const Info = (props: Props) => {
  const { formHook } = useContext(FormHookContext);
  const {
    register,
    formState: { errors },
    trigger,
    control,
  } = formHook;

  const ErrorMessage = ({ error }: { error: string }) => {
    if (error) {
      return (
        <span className="font-semibold text-strawberry-red text-sm ml-auto">
          {error}
        </span>
      );
    }

    return <></>;
  };

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
          <Label htmlFor="name">
            Name
            <ErrorMessage error={errors.name && errors.name.message} />
          </Label>

          <Controller
            name="name"
            control={control}
            rules={{
              required: "Name is required",
            }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="e.g. Stephen King"
                hasError={errors.name}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="email-address">
            Email Address
            <ErrorMessage error={errors.email && errors.email.message} />
          </Label>
          <Controller
            name="email"
            control={control}
            rules={{
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
              required: { value: true, message: "Email is required" },
            }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="e.g. StephenKing@lorem.com"
                hasError={errors.email}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="phone-number">
            Phone Number
            <ErrorMessage
              error={errors["phone-number"] && errors["phone-number"].message}
            />
          </Label>

          <Controller
            name="phone-number"
            control={control}
            rules={{
              required: "Phone number is required",
            }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="e.g. +1 234 567 890"
                hasError={errors["phone-number"]}
                type="number"
              />
            )}
          />
        </div>
      </form>
    </div>
  );
};

export default Info;
