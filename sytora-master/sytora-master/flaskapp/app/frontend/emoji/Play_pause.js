import React from 'react';

export default function Play_pause(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#4fd1d9" />
      <g fill="#fff">
        <path d="m13 16l19 16-19 16z" />
        <path d="m35.8 16h5.7v32h-5.7z" />
        <path d="m45.3 16h5.7v32h-5.7z" />
      </g>
    </svg>
  );
}
