"use client";

import { useEffect, useState } from "react";

type Props = {
  handleChange: (value: boolean) => void;
  value?: boolean;
};

const Toggle = ({ handleChange, value = false }: Props) => {
  const [toggleValue, setToggleValue] = useState(value);

  useEffect(() => {
    handleChange(toggleValue);
  }, [toggleValue, value]);

  return (
    <button
      onClick={() => setToggleValue((value) => !value)}
      className={`  rounded-full cursor-pointer before:transition-all p-1 bg-marine-blue h-6 w-12 before:content-[''] before:relative before:flex before:rounded-full before:aspect-square before:h-full before:bg-magnolia 
      ${
        toggleValue
          ? "before:left-full before:translate-x-[-100%]"
          : "before:left-0 "
      }
      `}
    ></button>
  );
};

export default Toggle;
