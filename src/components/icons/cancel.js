import React from 'react';

export default ({ className, color, size, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    style={style}
    className={className}
    role="img"
    viewBox="0 0 24 24"
  >
    <title>Cancel</title>
    <path
      d="M14.853 12l8.557-8.557A2.017 2.017 0 1020.556.59L12 9.147 3.443.59A2.017 2.017 0 10.591 3.443l8.557 8.556L.59 20.556a2.017 2.017 0 002.852 2.853L12 14.852l8.557 8.557a2.017 2.017 0 002.853-2.852L14.853 12z"
      fill={color}
    />
  </svg>
);
