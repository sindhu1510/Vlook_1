import * as React from "react";
interface SvgUploadProps{
    
}
const SvgUpload:React.FC<SvgUploadProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#0047AB"
      d="m5.807 5.14 1.526-1.533V10a.667.667 0 1 0 1.334 0V3.607l1.526 1.533a.666.666 0 0 0 .947 0 .666.666 0 0 0 0-.947L8.473 1.527a.7.7 0 0 0-.22-.14.67.67 0 0 0-.506 0 .7.7 0 0 0-.22.14L4.86 4.193a.67.67 0 1 0 .947.947M14 8a.667.667 0 0 0-.667.667v4a.667.667 0 0 1-.666.666H3.333a.667.667 0 0 1-.666-.666v-4a.667.667 0 0 0-1.334 0v4a2 2 0 0 0 2 2h9.334a2 2 0 0 0 2-2v-4A.667.667 0 0 0 14 8"
    />
  </svg>
);
export default SvgUpload;