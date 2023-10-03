import React from 'react';

export default function Secret(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#ff5a79" />
      <g fill="#fff">
        <path d="m25.8 37.5c-.3-.7-.8-1.6-1.4-2.6v15.1h-4.4v-13.5c-1.2 3-2.5 5.7-4 7.6-.4-1.4-1.4-3.6-2.1-4.9 2-2.3 3.9-6.3 5.1-10.1h-4.5v-4.6h5.5v-4.1c-1.5.3-3 .5-4.4.7-.2-1.1-.8-2.7-1.4-3.8 4.1-.6 8.7-1.6 11.4-3l3.2 3.7c-1.3.6-2.9 1.1-4.4 1.5v5h3.7v4.6h-3.7v.3c.9.9 3 3.2 3.9 4.3.4-2 .7-4.3.8-6.3l3.5.9c-.3 4.4-1 9.5-2.7 12.5l-3.3-1.8c.6-1.2 1.2-2.7 1.5-4.3l-2.3 2.8" />
        <path d="m45.6 39.6c-.1-2.4-.8-5.7-1.8-8.8-1.7 3.9-3.8 7.3-6.2 10.3v2.5c0 1.5.2 1.7 1.2 1.7h3.2c1 0 1.2-.8 1.4-5.7 1 .8 2.7 1.5 4 1.8-.4 6.4-1.6 8.2-4.9 8.2h-4.3c-3.3 0-4.6-.9-4.9-3.9-1.3 1.1-2.7 2.2-4.1 3.2-.7-.9-2.5-2.7-3.5-3.6 2.9-1.7 5.4-3.8 7.6-6.3v-16.7h4.4v10.6c2.8-4.8 4.8-10.5 6.1-16.9l4.7.9c-.8 3.8-1.9 7.3-3.1 10.5l1.6-.4c1.6 3.5 2.9 8.2 3.2 11.4l-4.6 1.2" />
        <path d="m39.1 23.2c-1.5-1.8-4.7-4.4-7.4-6l3-3.2c2.7 1.5 6 3.8 7.6 5.7l-3.2 3.5" />
      </g>
    </svg>
  );
}
