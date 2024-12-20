import * as React from "react";

const DefaultIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="16"
    height="16"
    {...props}
  >
    <title>default_file</title>
    <path
      d="M20.414,2H5V30H27V8.586ZM7,28V4H19v6h6V28Z"
      style={{ fill: "#c5c5c5" }}
    />
  </svg>
);

export default DefaultIcon;
