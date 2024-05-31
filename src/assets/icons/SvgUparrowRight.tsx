import * as React from "react";

interface SvgUparrowRightProps{

}
const SvgUparrowright:React.FC<SvgUparrowRightProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={24} height={24} fill="#0047AB" rx={12} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M13.886 11.535a.653.653 0 0 1 0 .934l-4.768 4.834a.393.393 0 0 0 .034.591.49.49 0 0 0 .648-.03l4.768-4.835a1.437 1.437 0 0 0 0-2.054L9.8 6.141a.49.49 0 0 0-.648-.032.393.393 0 0 0-.034.592z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUparrowright;