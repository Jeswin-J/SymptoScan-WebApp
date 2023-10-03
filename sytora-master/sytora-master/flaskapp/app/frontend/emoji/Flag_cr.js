import React from 'react';

export default function Flag_cr(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <g fill="#2a5f9e">
        <path d="M52.4,10C47,5,39.9,2,32,2c-7.9,0-15,3-20.4,8H52.4z" />
        <path d="m11.6 54c5.4 5 12.5 8 20.4 8 7.9 0 15-3 20.4-8h-40.8" />
      </g>
      <path d="m2 32c0 4.3.9 8.3 2.5 12h55c1.6-3.7 2.5-7.7 2.5-12s-.9-8.3-2.5-12h-55c-1.6 3.7-2.5 7.7-2.5 12" fill="#c94747" />
      <g fill="#f9f9f9">
        <path d="m11.6 54h40.7c3-2.8 5.5-6.2 7.1-10h-55c1.8 3.8 4.2 7.2 7.2 10" />
        <path d="m52.4 10h-40.8c-3 2.8-5.5 6.2-7.1 10h55c-1.7-3.8-4.1-7.2-7.1-10" />
      </g>
    </svg>
  );
}
