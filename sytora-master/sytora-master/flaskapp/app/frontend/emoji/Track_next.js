import React from 'react';

export default function Track_next(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#4fd1d9" />
      <g fill="#fff">
        <path d="M12 18 29.4 32 12 46z" />
        <path d="m29.4 18l17.4 14-17.4 14z" />
        <path d="m46.8 18h5.2v28h-5.2z" />
      </g>
    </svg>
  );
}
