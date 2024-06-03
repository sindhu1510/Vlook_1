import * as React from "react";

interface SvgRightArrowProps{
    
}
const SvgRightarrow:React.FC<SvgRightArrowProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={20}
    fill="none"
    
  >
    <path
      fill="#0047AB"
      fillRule="evenodd"
      d="M1.216 19.734a.897.897 0 0 1 0-1.286L9.445 10l-8.26-8.481A.9.9 0 0 1 1.25.235a.94.94 0 0 1 1.307.064L12 10l-9.474 9.734a.94.94 0 0 1-1.31 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRightarrow;