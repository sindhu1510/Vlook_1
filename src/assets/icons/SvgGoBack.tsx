import * as React from "react";
const SvgGoBack = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#686868"
      d="M5.25 11.25h15a.75.75 0 1 1 0 1.5h-15a.75.75 0 1 1 0-1.5"
    />
    <path
      fill="#686868"
      d="m5.56 12 6.221 6.219a.75.75 0 0 1-1.062 1.062l-6.75-6.75a.75.75 0 0 1 0-1.062l6.75-6.75a.75.75 0 1 1 1.062 1.062z"
    />
  </svg>
);
export default SvgGoBack;
