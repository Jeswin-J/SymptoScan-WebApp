import React from 'react';

export default function Kissing(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#ffdd67" />
      <g fill="#664e27">
        <path d="m41.5 50.4c1.6-1.6-1.8-3-1.8-5.9s3.4-4.2 1.8-5.9c-1.9-2-6-.5-8.6-3.1 0 2.2 1.8 4.5 5.2 4.5 0 0-2.3.9-2.3 4.5s2.3 4.5 2.3 4.5c-3.4 0-5.2 2.3-5.2 4.5 2.6-2.7 6.7-1.2 8.6-3.1" />
        <circle cx="20.5" cy="25.6" r={5} />
        <circle cx="43.5" cy="25.6" r={5} />
      </g>
      <g fill="#917524">
        <path d="m50.2 16.7c-3.2-2.7-7.5-3.9-11.7-3.1-.6.1-1.1-2-.4-2.2 4.8-.9 9.8.5 13.5 3.6.6.5-1 2-1.4 1.7" />
        <path d="m25.5 13.4c-4.2-.7-8.5.4-11.7 3.1-.4.4-2-1.2-1.4-1.7 3.7-3.2 8.7-4.5 13.5-3.6.7.2.2 2.3-.4 2.2" />
      </g>
    </svg>
  );
}
