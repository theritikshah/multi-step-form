import type { Metadata } from "next";
import "./globals.css";
import Stepper from "./components/common/Stepper";
import Steps from "./components/Steps";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const stepperValues = [
    { label: "Your Info", value: "your-info" },
    { label: "Select-Plan", value: "select-plan" },
    { label: "Add-ons", value: "add-ons" },
    { label: "Summary", value: "summary" },
  ];

  return (
    <html lang="en" className=" flex h-full">
      <body className=" flex max-md:relative w-full h-full flex-grow-1 max-md:justify-start max-md:items-start justify-center items-center bg-magnolia">
        <div className="flex md:min-w-[816px] md:w-[816px] md:h-[505px]  max-md:flex-col rounded-3xl md:bg-white max-md:bg-magnolia w-fit max-md:w-full max-md:p-0 p-4 ">
          <Stepper values={stepperValues} />
          <Steps>{children}</Steps>
        </div>
      </body>
    </html>
  );
}
