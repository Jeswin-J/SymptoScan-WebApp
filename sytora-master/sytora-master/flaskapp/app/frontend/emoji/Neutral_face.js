import React from 'react';

export default function Neutral_face(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#ffdd67" />
      <g fill="#664e27">
        <circle cx="20.5" cy="27.6" r={5} />
        <circle cx="43.5" cy="27.6" r={5} />
        <path d="m38.9 48h-13.8c-1.5 0-1.5-4 0-4h13.7c1.6 0 1.6 4 .1 4" />
      </g>
    </svg>
  );
}
