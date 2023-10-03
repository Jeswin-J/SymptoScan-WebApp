import React from 'react';

export default function Full_moon_with_face(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#ffe8a6" />
      <g fill="#f4dc9f">
        <circle cx={50} cy="35.2" r={7} />
        <circle cx="18.1" cy={39} r={6} />
        <circle cx="24.2" cy={50} r={9} />
        <circle cx={24} cy="17.2" r={4} />
        <circle cx={37} cy="18.2" r={4} />
        <circle cx="12.1" cy="25.9" r={4} />
        <circle cx={39} cy="9.2" r={2} />
        <circle cx="8.1" cy={39} r={2} />
        <circle cx={52} cy={50} r={2} />
        <circle cx={25} cy="29.9" r={3} />
        <circle cx={15} cy="15.7" r={2} />
        <circle cx={46} cy="52.6" r={4} />
        <path d="m24.2 10.8c0 2.8 2.2 5 5 5 2.8 0 5-2.2 5-5 0-2.8-2.2-5-5-5-2.8-.1-5 2.2-5 5" />
      </g>
      <g fill="#827717">
        <path d="m37 39c-3.5 4.9-11.3 4.8-9.8-3.7.6-3.3 2.2-13 2.2-13s0 6.2 0 10.6c0 7.6 2.1 7.3 7.6 6.1" />
        <path d="m42.8 43.9c-7 4.8-14.7 4.8-21.6 0-.8-.6-1.6.4-1 1.4 2.1 3.5 6.4 6.6 11.8 6.6s9.7-3.1 11.8-6.6c.6-1-.2-2-1-1.4" />
        <path d="m38.4 24.7c3.7 7 11.2 7 14.9 0 .2-.4-.3-.5-.9-.9-3.7 2.9-9.8 2.7-13.1 0-.6.4-1.1.6-.9.9" />
        <path d="m10.7 24.7c3.7 7 11.2 7 14.9 0 .2-.4-.3-.5-.9-.9-3.7 2.9-9.8 2.7-13.1 0-.6.4-1.1.6-.9.9" />
      </g>
    </svg>
  );
}
