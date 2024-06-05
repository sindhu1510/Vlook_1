import * as React from "react";
// import Svg, { Path } from "react-native-svg";
const SvgFilerIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#0047AB"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 1h24M5 7h16M9 13h8"
    />
  </svg>
);
export default SvgFilerIcon;