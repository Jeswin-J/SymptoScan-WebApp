import React from 'react';

export default function Track_previous(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#4fd1d9" />
      <g fill="#fff">
        <path d="M52 46 34.6 32 52 18z" />
        <path d="M34.6 46 17.2 32 34.6 18z" />
        <path d="m12 18h5.2v28h-5.2z" />
      </g>
    </svg>
  );
}
