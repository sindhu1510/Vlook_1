import * as React from "react";

interface SvgFIlterProps{
    
}
const SvgFilter:React.FC<SvgFIlterProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
   
  >
    <g filter="url(#filter_svg__a)">
      <rect width={40} height={40} x={4} y={4} fill="#fff" rx={6} />
    </g>
    <path
      stroke="#0047AB"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 19h24M16 25h16M20 31h8"
    />
    <defs>
      <filter
        id="filter_svg__a"
        width={50}
        height={50}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          radius={1}
          result="effect1_dropShadow_260_7126"
        />
        <feOffset dx={1} dy={1} />
        <feGaussianBlur stdDeviation={3} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_260_7126"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_260_7126"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgFilter;