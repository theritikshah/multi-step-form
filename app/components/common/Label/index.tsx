import React from "react";

type Props = {
  [key: string]: any;
};

const Label = (props: Props) => {
  return (
    <label className="font-thin text-marine-blue text-sm" {...props}>
      {props.children}
    </label>
  );
};

export default Label;
