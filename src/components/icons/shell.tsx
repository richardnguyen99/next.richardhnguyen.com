import * as React from "react";

const ShellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="16"
    height="16"
    {...props}
  >
    <title>file_type_shell</title>
    <path
      d="M29.4,27.6H2.5V4.5H29.4Zm-25.9-1H28.4V5.5H3.5Z"
      style={{ fill: "#d9b400" }}
    />
    <polygon
      points="6.077 19.316 5.522 18.484 10.366 15.255 5.479 11.184 6.12 10.416 12.035 15.344 6.077 19.316"
      style={{ fill: "#d9b400" }}
    />
    <rect
      x="12.7"
      y="18.2"
      width="7.8"
      height="1"
      style={{ fill: "#d9b400" }}
    />
    <rect
      x="2.5"
      y="5.5"
      width="26.9"
      height="1.9"
      style={{ fill: "#d9b400" }}
    />
  </svg>
);

export default ShellIcon;
