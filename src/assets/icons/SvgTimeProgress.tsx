import * as React from "react";

const SvgTimeProgressIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#E05A00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M13.334 27.702c-1.16-.264-2.275-.7-3.307-1.292m8.64-22.113a12.004 12.004 0 0 1 0 23.405M6.106 22.79a12 12 0 0 1-1.636-3.456M4.166 14a12 12 0 0 1 1.2-3.567l.225-.407M9.21 6.105a12 12 0 0 1 4.124-1.808"
    />
    <path
      stroke="#E05A00"
      strokeLinecap="round"
      strokeWidth={2}
      d="M15 11v7M22 18h-7"
    />
  </svg>
);
export default SvgTimeProgressIcon;