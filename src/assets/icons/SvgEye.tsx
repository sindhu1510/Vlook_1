import * as React from "react";

interface SvgEyeProps{
    
}
const SvgEye:React.FC<SvgEyeProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={47}
    height={24}
    fill="none"
    
  >
    <g clipPath="url(#eye_svg__a)">
      <path
        fill="#0047AB"
        d="M23.5 4.847c-4.585 0-8.744 2.509-11.812 6.584a.95.95 0 0 0 0 1.134c3.068 4.08 7.227 6.588 11.812 6.588 4.586 0 8.744-2.509 11.812-6.583a.95.95 0 0 0 0-1.135c-3.068-4.08-7.226-6.588-11.812-6.588m.329 12.19a5.05 5.05 0 0 1-5.366-5.366c.157-2.514 2.194-4.551 4.708-4.708a5.05 5.05 0 0 1 5.366 5.366c-.162 2.509-2.2 4.546-4.708 4.708m-.152-2.327a2.714 2.714 0 0 1-2.887-2.887 2.73 2.73 0 0 1 2.538-2.538 2.714 2.714 0 0 1 2.887 2.887 2.73 2.73 0 0 1-2.538 2.538"
      />
    </g>
    <defs>
      <clipPath id="eye_svg__a">
        <path fill="#fff" d="M11.5 0h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEye;