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
    <title>Love</title>
    <path
      d="M12 23.04l-1.68-1.68C4.08 15.84 0 12.12 0 7.56 0 3.84 2.88.96 6.6.96c2.04 0 4.08.96 5.4 2.52C13.32 1.92 15.36.96 17.4.96c3.72 0 6.6 2.88 6.6 6.6 0 4.56-4.08 8.28-10.32 13.8L12 23.04z"
      fill={color}
    />
  </svg>
);
