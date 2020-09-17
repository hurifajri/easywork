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
    <title>Checked</title>
    <path
      d="M.277 12.923A.997.997 0 010 12.277c0-.185.092-.462.277-.646l1.292-1.293a.892.892 0 011.293 0l.092.093 5.077 5.446a.446.446 0 00.646 0l12.37-12.83h.091a.892.892 0 011.293 0l1.292 1.292c.37.369.37.923 0 1.292L8.953 20.954a.838.838 0 01-.645.277.838.838 0 01-.646-.277L.462 13.2l-.185-.277z"
      fill={color}
    />
  </svg>
);
