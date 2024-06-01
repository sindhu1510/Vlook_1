import * as React from "react";

const SvgClockgreen = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#0A0"
      d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m3.5 7H8a.5.5 0 0 1-.5-.5V4.5a.5.5 0 1 1 1 0v3h3a.5.5 0 0 1 0 1"
    />
  </svg>
);
export default SvgClockgreen;