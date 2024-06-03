import * as React from "react";
interface SvgLeftArrowProps{
    
}
const SvgLeftarrow:React.FC<SvgLeftArrowProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    
  >
    <path
      fill="#0047AB"
      fillRule="evenodd"
      d="M16.729 2.266a.897.897 0 0 1 0 1.286L8.5 12l8.26 8.481a.897.897 0 0 1-.065 1.284.94.94 0 0 1-1.308-.064L5.945 12l9.474-9.734a.94.94 0 0 1 1.31 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLeftarrow;