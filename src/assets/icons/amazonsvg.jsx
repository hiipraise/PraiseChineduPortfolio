import React from "react";

const AmazonSvg = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="90" height="90" fill="url(#pattern0_1_198)" />
      <defs>
        <pattern
          id="pattern0_1_198"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_198" transform="scale(0.0111111)" />
        </pattern>
        <image
          id="image0_1_198"
          width="90"
          height="90"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default AmazonSvg;
