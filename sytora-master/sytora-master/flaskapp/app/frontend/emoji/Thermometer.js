import React from 'react';

export default function Thermometer(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path d="m37.9 46.2l3.1-36c0-11-18-11-18 0l3.1 36c-1.9 1.7-3.1 4.1-3.1 6.8 0 5 4 9 9 9 5 0 9-4 9-9 0-2.7-1.2-5.1-3.1-6.8m-5.9 13.6c-3.7 0-6.7-3-6.7-6.8 0-2.4 1.3-4.6 3.3-5.8l-2-37.2c0-6.4 10.8-6.4 10.8 0l-1.9 37.2c1.9 1.2 3.3 3.3 3.3 5.8 0 3.7-3.1 6.8-6.8 6.8" opacity=".8" fill="#a1b8c7" />
      <g fill="#ed4c5c">
        <path d="m28.4 21.4l1.4 27.5h4.4l1.4-27.5z" />
        <path d="m37.6 53c0 3.1-2.5 5.6-5.6 5.6-3.1 0-5.6-2.5-5.6-5.6 0-3.1 2.5-5.6 5.6-5.6 3.1 0 5.6 2.5 5.6 5.6" />
      </g>
      <ellipse cx={32} cy="21.4" rx="3.6" ry="1.2" fill="#a5203c" />
      <g fill="#51575b">
        <path d="m30.9 28.2h-4.9l-.1-1.5h4.9z" />
        <path d="m30.9 32.4h-4.7v-1.5h4.6z" />
        <path d="m30.9 36.6h-4.5v-1.5h4.4z" />
        <path d="m30.9 40.8h-4l-.1-1.5h4.1z" />
        <path d="m31 45h-3.8v-1.4h3.7z" />
      </g>
    </svg>
  );
}
