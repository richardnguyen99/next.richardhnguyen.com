import * as React from "react";

const TextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="16"
    height="16"
    {...props}
  >
    <title>file_type_text</title>
    <path
      d="M22.038,2H6.375a1.755,1.755,0,0,0-1.75,1.75v24.5A1.755,1.755,0,0,0,6.375,30h19.25a1.755,1.755,0,0,0,1.75-1.75V6.856Zm.525,2.844,1.663,1.531H22.563ZM6.375,28.25V3.75H20.813V8.125h4.813V28.25Z"
      style={{ fill: "#c2c2c2" }}
    />
    <rect
      x="8.125"
      y="15.097"
      width="13.076"
      height="1.75"
      style={{ fill: "#829ec2" }}
    />
    <rect
      x="8.125"
      y="24.439"
      width="9.762"
      height="1.75"
      style={{ fill: "#829ec2" }}
    />
    <rect
      x="8.125"
      y="19.763"
      width="15.75"
      height="1.75"
      style={{ fill: "#829ec2" }}
    />
    <rect
      x="8.125"
      y="10.23"
      width="15.75"
      height="1.75"
      style={{ fill: "#829ec2" }}
    />
  </svg>
);

export default TextIcon;
