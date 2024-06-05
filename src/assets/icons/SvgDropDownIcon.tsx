import * as React from "react";

const SvgDropdownIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={10}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={0.5}
      d="M9.622 7.515a.87.87 0 0 1-1.244 0L1.932 1.157a.525.525 0 0 0-.789.045.654.654 0 0 0 .042.864L7.63 8.424c.778.768 1.96.768 2.738 0l6.446-6.358a.653.653 0 0 0 .042-.864.525.525 0 0 0-.788-.045z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDropdownIcon;
