"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimal="," prefix="PKR " duration={2.75} end={amount} />
    </div>
  );
};

export default AnimatedCounter;
