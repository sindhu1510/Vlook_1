import * as React from "react";

const SvgPlusIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#0047AB"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8 1v14M1 8h14"
    />
  </svg>
);
export default SvgPlusIcon;