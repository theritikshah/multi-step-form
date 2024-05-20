"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

import React, { ReactNode, createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
  children: ReactNode;
};

export type FormType = {
  name: string;
  email: string;
  phoneNumber: string;
  isYearly: boolean;
  selectedPlan: { [key: string]: any };
  selectedAddons: { [key: number]: AddonType };
};

type AddonType = {
  id: number;
  name: string;
  description: string;
  [key: string]: any;
};

export const FormHookContext = createContext<any>(null);

const Steps = ({ children, ...props }: Props) => {
  const formHook = useForm<FormType>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      isYearly: false,
      selectedPlan: {},
      selectedAddons: {},
    },
  });

  const { handleSubmit } = formHook;

  const [isLoading, setIsLoading] = useState(false);

  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [path]);

  const handleNext = () => {
    setIsLoading(true);
    switch (path) {
      case "/your-info":
        router.push("/select-plan");
        break;
      case "/select-plan":
        router.push("/add-ons");
        break;
      case "/add-ons":
        router.push("/summary");
        break;
      case "/summary":
        router.push("/summary/thank-you");
        break;
      default:
        break;
    }
  };

  return (
    <FormHookContext.Provider value={{ formHook }}>
      <section className="flex  flex-col md:overflow-hidden   bg-white max-md:bg-magnolia max-md:mx-auto  p-20 max-md:p-0 max-md:w-full w-full h-full max-md:m-4  pt-10 pb-6   gap-3">
        <AnimatePresence mode="wait">
          <motion.section
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ type: "just", duration: 0.2 }}
            key={path}
            className="flex md:first:w-full w-full  max-md:mt-[-4.7rem]  max-md:m-5 max-md:mb-24 rounded-3xl bg-white max-md:p-5 max-md:py-10  max-md:w-[calc(100%-1.25rem*2)]"
          >
            {children}
          </motion.section>
        </AnimatePresence>
        {!(path == "/summary/thank-you") && (
          <footer className="flex  items-center max-md:fixed max-md:bottom-0 bg-white  max-md:left-0 max-md:w-full  max-md:p-5  md:mt-auto  justify-between ">
            {!(path == "/" || path.includes("thank-you")) && (
              <button className="text-cool-gray" onClick={() => router.back()}>
                Go Back
              </button>
            )}
            <button
              className={`bg-marine-blue text-white p-2 px-6 rounded-lg max-md:min-w-24 ${
                path == "/" ? "ml-auto" : ""
              } ${path == "/summary" ? "bg-purplish-blue" : ""}`}
              onClick={handleSubmit(handleNext)}
            >
              {isLoading ? (
                <Spinner />
              ) : path == "/summary" ? (
                "Confirm"
              ) : (
                "Next"
              )}
            </button>
          </footer>
        )}
      </section>
    </FormHookContext.Provider>
  );
};

export default Steps;

export function Spinner() {
  return (
    <div className="inline-block w-4 h-4 border-2 border-t-2 border-gray-200 border-t-transparent rounded-full animate-spin"></div>
  );
}
