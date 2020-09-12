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
    <title>Arrow</title>
    <path
      d="M18.348 13.188l-10.32 10.32a1.68 1.68 0 11-2.376-2.377L14.782 12l-9.13-9.13A1.68 1.68 0 018.029.491l10.32 10.32c.328.328.491.758.491 1.188 0 .43-.164.86-.492 1.188z"
      fill={color}
    />
  </svg>
);
