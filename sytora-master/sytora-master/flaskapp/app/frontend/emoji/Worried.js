import React from 'react';

export default function Worried(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#ffdd67" />
      <g fill="#664e27">
        <circle cx="20.5" cy="29.6" r={5} />
        <circle cx="43.5" cy="29.6" r={5} />
      </g>
      <g fill="#917524">
        <path d="m51.2 18.7c-3.2-2.7-7.5-3.9-11.7-3.1-.6.1-1.1-2-.4-2.2 4.8-.9 9.8.5 13.5 3.6.6.5-1 2.1-1.4 1.7" />
        <path d="m24.5 15.4c-4.2-.7-8.5.4-11.7 3.1-.4.4-2-1.2-1.4-1.7 3.7-3.2 8.7-4.5 13.5-3.6.7.2.2 2.4-.4 2.2" />
      </g>
      <path d="m40.6 44.4c-5.4-2.5-11.8-2.5-17.2 0-1.3.6.3 4.2 1.7 3.5 3.6-1.7 8.9-2.3 13.9 0 1.3.6 3-2.8 1.6-3.5" fill="#664e27" />
    </svg>
  );
}
