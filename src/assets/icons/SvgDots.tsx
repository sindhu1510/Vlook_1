import * as React from "react";

const SvgDots = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path fill="#686868" d="M4 15.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    <path
      fill="#686868"
      d="M4 15.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6M12 15.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6M20 15.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
  </svg>
);
export default SvgDots;