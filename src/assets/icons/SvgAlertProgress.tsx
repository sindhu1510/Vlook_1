import * as React from "react";

const SvgAlertProgress = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#C60000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M13.334 27.702c-1.16-.264-2.275-.7-3.307-1.292m8.64-22.113a12.004 12.004 0 0 1 0 23.405M6.106 22.79a12 12 0 0 1-1.636-3.456M4.166 14a12 12 0 0 1 1.2-3.567l.225-.407M9.21 6.105a12 12 0 0 1 4.124-1.808M16 10.667V16m0 5.333v.013"
    />
  </svg>
);
export default SvgAlertProgress;
