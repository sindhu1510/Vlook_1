import * as React from "react";

interface SvgDownloadProps{
    
}
const SvgDownload:React.FC<SvgDownloadProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
 
  >
    <path
      fill="#0047AB"
      d="M12.293 19.162a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 0 0-1.414-1.414L13 17.041l-5.657-5.657a1 1 0 0 0-1.414 1.414zM14 1.001a1 1 0 1 0-2 0zm0 17.454V1.001h-2v17.454z"
    />
    <path
      stroke="#0047AB"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 18.455v2.546a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-2.546"
    />
  </svg>
);
export default SvgDownload;