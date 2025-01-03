import * as React from "react";

const MdxIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="16"
    height="16"
    {...props}
  >
    <title>mdx</title>
    <path
      d="M20.3,16.5l-3.9,3.9-4-3.9,1.1-1.1,2.1,2.1V11.8h1.5v5.8l2.1-2.1ZM3.5,15.7l2.7,2.7L9,15.7v4.4h1.5V12L6.2,16.3,2,12v8.1H3.5Z"
      style={{ fill: "#d2d2d2" }}
    />
    <path
      d="M28.8,20l-3.1-3.1L22.6,20l-1-1.1,3.1-3.1-3.2-3.2,1.1-1,3.1,3.2,3.2-3.2,1.1,1-3.2,3.2,3.1,3.1Z"
      style={{ fill: "#f9ac00" }}
    />
  </svg>
);

export default MdxIcon;
