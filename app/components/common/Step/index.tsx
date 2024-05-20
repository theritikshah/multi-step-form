"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

type Props = {
  count: number;
  label: string;
  value: any;
};

const Step = ({ count, label, value }: Props) => {
  const handleStepClick = () => {};

  const path = usePathname();

  return (
    <div className="flex  bg-cover " onClick={handleStepClick}>
      <Link href={`/${value}`} className="flex gap-4 text-white items-center">
        <div
          className={`flex w-8 h-8 text-xs font-semibold justify-center items-center  border border-white rounded-full aspect-square
        ${
          path.slice(1) == value
            ? "bg-light-blue !border-light-blue text-marine-blue"
            : ""
        }
        `}
        >
          {count}
        </div>
        <div className=" flex-col hidden md:flex">
          <span className="text-xs tracking-widest  m-0 text-light-gray">{`STEP ${count}`}</span>
          <span className="text-xs whitespace-nowrap tracking-widest uppercase font-medium m-0">
            {label}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Step;
