import React from 'react';

export default function Candle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <ellipse cx={32} cy="55.1" rx="17.9" ry="6.9" fill="#a29b95" />
      <ellipse cx={32} cy="53.6" rx="16.5" ry="5.3" fill="#dddad5" />
      <ellipse cx={32} cy="51.2" rx="10.5" ry="4.2" fill="#a29b95" />
      <ellipse cx={32} cy="50.6" rx="9.8" ry={3} fill="#dddad5" />
      <ellipse cx={32} cy="42.5" rx="10.5" ry="8.6" fill="#a29b95" />
      <ellipse cx={32} cy="40.8" rx="8.9" ry="6.9" fill="#dddad5" />
      <ellipse cx={32} cy="36.3" rx="11.5" ry="4.4" fill="#a29b95" />
      <ellipse cx={32} cy="35.4" rx="10.2" ry="3.5" fill="#dddad5" />
      <ellipse cx={32} cy="29.4" rx={21} ry="6.9" fill="#a29b95" />
      <ellipse cx={32} cy="27.9" rx="19.4" ry="5.3" fill="#dddad5" />
      <g fill="#dfcea3">
        <ellipse cx={32} cy="26.7" rx="12.4" ry="3.5" />
        <path d="m19.6 12.1h24.8v14.5h-24.8z" />
      </g>
      <ellipse cx={32} cy="12.1" rx="12.4" ry="3.5" fill="#fff6d7" />
      <ellipse cx={32} cy="12.9" rx="9.4" ry="2.6" fill="#efd8b1" />
      <path d="m31.5 12.5c-2 0-3.9-1-1.7-4.8 2.1-3.8 2.8-4.6 2.8-5.7 0 0 6.4 10.5-1.1 10.5" fill="#ed4c5c" />
      <path d="m32.1 10.8c.2.6.2 1.3.4 1.9.1.3.1.6 0 .9-.1.1-.2.6-.4.5-.2 0-.3-.5-.4-.6-.1-.4 0-.7 0-1 0-.2.1-1.7.4-1.7" fill="#8f9496" />
      <path d="m31.7 12.5c-1.3 0-2.5-.6-1.1-3.1 1.4-2.4 1.8-3 1.8-3.7 0 .1 4.1 6.8-.7 6.8" fill="#ffce31" />
      <path d="m31.6 12.5c0 0 .1-1.7.4-1.7.3 0 .4 1.6.4 1.6s-.4.1-.8.1" fill="#3e4347" />
    </svg>
  );
}
