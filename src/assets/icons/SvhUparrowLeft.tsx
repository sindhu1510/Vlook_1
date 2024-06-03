import * as React from "react";

interface SvgUpArrowLeft{
    
}
const SvgUparrowleft:React.FC<SvgUpArrowLeft> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
 
  >
    <rect
      width={24}
      height={24}
      fill="#0047AB"
      rx={12}
      transform="matrix(-1 0 0 1 24 0)"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M10.114 11.535a.653.653 0 0 0 0 .934l4.768 4.834a.393.393 0 0 1-.034.591.49.49 0 0 1-.648-.03l-4.768-4.835a1.437 1.437 0 0 1 0-2.054L14.2 6.141a.49.49 0 0 1 .648-.032c.188.155.204.42.034.592z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUparrowleft;