import * as React from "react";
// import Svg, { Path } from "react-native-svg";
const SvgDownArrow = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#C60000"
      fillRule="evenodd"
      d="M15.536 18.5c0 .414.335.75.75.75h6.857a.75.75 0 0 0 .75-.75v-6.857a.75.75 0 1 0-1.5 0v6.107h-6.107a.75.75 0 0 0-.75.75"
      clipRule="evenodd"
    />
    <path
      fill="#C60000"
      fillRule="evenodd"
      d="M23.673 19.03a.75.75 0 0 0 0-1.06l-9.691-9.691a1.607 1.607 0 0 0-2.25 0l-.005.005-3.94 3.939a.107.107 0 0 1-.147 0L1.387 5.97a.75.75 0 0 0-1.06 1.06l6.262 6.263a1.607 1.607 0 0 0 2.25 0l.005-.005 3.94-3.94a.107.107 0 0 1 .146 0l9.682 9.682a.75.75 0 0 0 1.061 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDownArrow;