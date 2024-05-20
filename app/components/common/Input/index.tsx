"use client";

import React, { useContext } from "react";

type Props = {
  [key: string]: any;
};

const Input = (props: Props) => {
  return (
    <input
      className={`rounded-lg p-2 border text-marine-blue text-sm font-medium focus:outline-marine-blue focus:outline
      ${props.hasError ? "border-strawberry-red" : ""}
      `}
      {...props}
    />
  );
};

export default Input;
