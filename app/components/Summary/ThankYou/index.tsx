import React from "react";

type Props = {};

const ThankYou = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-5 rounded-lg">
      <img src="/assests/images/icon-thank-you.svg" alt="" />
      <h1>Thank you!</h1>
      <p className="text-center text-cool-gray">
        Thanks for confiming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default ThankYou;
