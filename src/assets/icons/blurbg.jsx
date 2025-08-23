import React from "react";

const BlurBg = () => {
  return (
    <svg
      width="270"
      height="355"
      viewBox="0 0 364 429"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1_183)">
        <ellipse
          cx="149.667"
          cy="253.553"
          rx="149.667"
          ry="253.553"
          transform="matrix(-0.499535 -0.866294 -0.866294 0.499535 392.83 217.311)"
          fill="url(#paint0_radial_1_183)"
          fillOpacity="0.7"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_183"
          x="-166.674"
          y="0.0601501"
          width="530.179"
          height="428.507"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="16.5"
            result="effect1_foregroundBlur_1_183"
          />
        </filter>
        <radialGradient
          id="paint0_radial_1_183"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(149.667 253.553) rotate(90) scale(253.553 149.667)"
        >
          <stop stopColor="#A3E2BB" />
          <stop offset="1" stopColor="#A3E2BB" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default BlurBg;
