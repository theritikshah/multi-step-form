"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export const PlanContext = createContext<any>(null);

const Steps = ({ children, ...props }: Props) => {
  const [isYearly, setIsYearly] = useState(false);
  const path = usePathname();

  return (
    <PlanContext.Provider value={{ isYearly, setIsYearly }}>
      <section className="flex flex-col md:overflow-hidden   bg-white max-md:bg-magnolia max-md:mx-auto  p-20 max-md:p-0 max-md:w-full w-full h-full max-md:m-4  pt-10 pb-6   max-md:gap-3">
        <AnimatePresence mode="wait">
          <motion.section
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ type: "just" }}
            key={path}
            className="flex md:first:w-full w-full  max-md:mt-[-4.7rem]  max-md:m-5 max-md:mb-24 rounded-3xl bg-white max-md:p-5 max-md:py-10  max-md:w-[calc(100%-1.25rem*2)]"
          >
            {children}
          </motion.section>
        </AnimatePresence>
        <footer className="flex  items-center max-md:fixed max-md:bottom-0 bg-white  max-md:left-0 max-md:w-full  max-md:p-5  md:mt-auto  justify-between ">
          <button className="text-cool-gray">Go Back</button>
          <button className="bg-marine-blue text-white p-2 px-6 rounded-lg">
            Next
          </button>
        </footer>
      </section>
    </PlanContext.Provider>
  );
};

export default Steps;
