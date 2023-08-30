import React from 'react';

export default function Battery(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <g fill="#3e4347">
        <path d="m42 7c0 1.1-.9 2-2 2h-16c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v3" />
        <path d="m48 6h-32c-2.2 0-4 1.8-4 4v48c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4v-48c0-2.2-1.8-4-4-4m0 47c0 .5-.5 1-1 1h-30c-.5 0-1-.5-1-1v-38c0-.5.5-1 1-1h30c.5 0 1 .5 1 1v38" />
      </g>
      <g fill="#a8d600">
        <path d="m46 24c0 1.1-.9 2-2 2h-24c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v4" />
        <path d="m46 36c0 1.1-.9 2-2 2h-24c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v4" />
        <path d="m46 48c0 1.1-.9 2-2 2h-24c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v4" />
      </g>
    </svg>
  );
}
