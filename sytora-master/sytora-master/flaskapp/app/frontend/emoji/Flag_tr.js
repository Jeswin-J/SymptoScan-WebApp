import React from 'react';

export default function Flag_tr(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#ed4c5c" />
      <g fill="#fff">
        <path d="m41.3 39l.1-5.4-5.4-1.6 5.4-1.6-.1-5.4 3.3 4.3 5.4-1.6-3.3 4.3 3.3 4.3-5.4-1.6z" />
        <path d="m33.2 44c-6.6 0-11.9-5.4-11.9-12s5.3-12 11.9-12c2.5 0 4.8.8 6.8 2.1-2.7-3.1-6.7-5.1-11.2-5.1-8.2 0-14.8 6.7-14.8 15 0 8.3 6.6 15 14.8 15 4.5 0 8.5-2 11.2-5.1-1.9 1.3-4.2 2.1-6.8 2.1" />
      </g>
    </svg>
  );
}
