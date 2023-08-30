import React from 'react';

export default function Timer(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path d="M62,38.1C62,57.5,48.6,61,32,61S2,57.5,2,38.1C2,18.7,15.4,3,32,3S62,18.7,62,38.1z" fill="#13618d" />
      <path d="m59 46.1c0 4.6-5.2 13.5-27 13.5s-27-9-27-13.5c0-2.1 7.9 7.7 27 7.7s27-9.9 27-7.7" fill="#055672" />
      <ellipse cx={32} cy="27.3" rx="22.5" ry="22.8" fill="#428bc1" />
      <g fill="#f5f5f5">
        <ellipse transform="matrix(.5003-.8659.8659.5003-26.8623 41.3657)" cx="22.4" cy={44} rx="1.3" ry="1.3" />
        <ellipse transform="matrix(.5002-.8659.8659.5002 11.5116 41.3739)" cx="41.6" cy="10.7" rx="1.3" ry="1.3" />
        <ellipse transform="matrix(.866-.5.5.866-16.4066 12.6382)" cx="15.4" cy="36.9" rx="1.3" ry="1.3" />
        <ellipse transform="matrix(.8658-.5003.5003.8658-2.3538 26.7069)" cx="48.6" cy="17.7" rx="1.3" ry="1.3" />
        <ellipse cx="12.8" cy="27.3" rx="1.3" ry="1.3" />
        <ellipse cx="51.2" cy="27.3" rx="1.3" ry="1.3" />
        <ellipse transform="matrix(.5002-.8659.8659.5002-7.6759 22.184)" cx="15.4" cy="17.7" rx="1.3" ry="1.3" />
        <ellipse transform="matrix(.5003-.8658.8658.5003-7.6836 60.5495)" cx="48.6" cy="36.9" rx="1.3" ry="1.3" />
        <ellipse transform="matrix(.866-.5001.5001.866-2.3561 12.6411)" cx="22.4" cy="10.7" rx="1.3" ry="1.3" />
        <path d="m42.7 43.3c.4.6.2 1.4-.5 1.8-.6.4-1.4.1-1.8-.5-.4-.6-.2-1.4.5-1.8.7-.3 1.5-.1 1.8.5" />
        <ellipse cx={32} cy="8.1" rx="1.3" ry="1.3" />
        <ellipse cx={32} cy="46.5" rx="1.3" ry="1.3" />
      </g>
      <circle cx={32} cy="27.3" r={16} fill="#b0bcc1" />
      <circle cx={32} cy="25.9" r="14.5" fill="#f5f5f5" />
      <path d="m37.7 33.3c0 7.3-11.3 7.3-11.3 0-.1-7.3 2.5-21.3 5.6-21.3 3.1 0 5.7 14 5.7 21.3" fill="#b0bcc1" />
      <path d="m36.9 31.8c0 7-9.9 7-9.9 0 0-7 2.2-20.5 4.9-20.5 2.8 0 5 13.5 5 20.5" fill="#e4e7ea" />
      <path d="m36.1 29.1c0 6.1-8.3 6.1-8.3 0s1.9-17.7 4.1-17.7c2.4 0 4.2 11.6 4.2 17.7" fill="#fff" />
    </svg>
  );
}
