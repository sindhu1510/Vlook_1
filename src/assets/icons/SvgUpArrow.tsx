import * as React from "react";
// import Svg, { Path } from "react-native-svg";
const SvgUpArrow = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#0A0"
      fillRule="evenodd"
      d="M15.536 6a.75.75 0 0 1 .75-.75h6.857a.75.75 0 0 1 .75.75v6.857a.75.75 0 1 1-1.5 0V6.75h-6.107a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <path
      fill="#0A0"
      fillRule="evenodd"
      d="M23.673 5.47a.75.75 0 0 1 0 1.06l-9.691 9.691a1.607 1.607 0 0 1-2.25 0l-.005-.005-3.94-3.939a.107.107 0 0 0-.147 0L1.387 18.53a.75.75 0 0 1-1.06-1.06l6.262-6.263a1.607 1.607 0 0 1 2.25 0l.005.005 3.94 3.94a.11.11 0 0 0 .146 0l9.682-9.682a.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUpArrow;
