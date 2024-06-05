import * as React from "react";

const SvgPolygon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={12}
    fill="none"
    {...props}
  >
    <path fill={props.color} d="m7 0 6.928 12H.072z" />
  </svg>
);
export default SvgPolygon;
