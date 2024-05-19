import Step from "../Step";

type value = { label: string; value: any };

type Props = {
  values: value[];
};

const Stepper = ({ values, ...props }: Props) => {
  console.log(props);
  return (
    <div className="flex max-md:justify-center max-md:pb-24 md:flex-col rounded-2xl max-md:rounded-none  p-8 pr-16 gap-4 bg-cover bg-[url('/assests/images/bg-sidebar-mobile.svg')] md:bg-[url('/assests/images/bg-sidebar-desktop.svg')] ">
      {values.map(({ label, value }, index) => {
        return (
          <Step
            key={`step-${index}`}
            label={label}
            value={value}
            count={index + 1}
          />
        );
      })}
    </div>
  );
};

export default Stepper;
