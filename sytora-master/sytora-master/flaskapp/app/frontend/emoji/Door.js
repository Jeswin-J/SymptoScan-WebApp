import React from 'react';

export default function Door(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path d="M3,29v32h58V29C61-10,3-9.4,3,29z" fill="#89664c" />
      <path d="M7.2,31.2V61h49.5V31.2C56.8-5,7.2-4.5,7.2,31.2z" fill="#594640" />
      <path d="M8,31.7V61H56V31.7C56-4.1,8-3.5,8,31.7z" fill="#a37d64" />
      <path fill="#94989b" d="m0 61h64v3h-64z" />
      <g fill="#594640">
        <path d="m35.2 30.5h16.6c-.6-12.1-8.3-18.6-16.6-19.8 0 0 0 19.8 0 19.8" />
        <path d="m29.7 30.5v-19.7c-8.3 1.2-16 7.9-16.6 19.7h16.6" />
        <path d="m35.2 36.1h16.7v19.9h-16.7z" />
        <path d="m13 36.1h16.7v19.9h-16.7z" />
      </g>
      <g fill="#89664c">
        <path d="m34.8 30.1h16.6c-.6-12.1-8.3-18.6-16.6-19.8 0 .1 0 19.8 0 19.8" />
        <path d="m29.2 30.1v-19.7c-8.3 1.2-16 7.9-16.6 19.7h16.6" />
        <path d="m34.8 35.7h16.7v19.9h-16.7z" />
        <path d="m12.5 35.7h16.7v19.9h-16.7z" />
      </g>
      <path fill="#ffce31" d="m47.5 28.9h7v14h-7z" />
      <path fill="#f2b200" d="m48 29.4h6v13h-6z" />
      <path d="m52 41.2l-.4-2.7c.2-.2.4-.5.4-.8 0-.6-.4-1-1-1-.6 0-1 .4-1 1 0 .3.2.6.4.8l-.4 2.7h2" fill="#3e4347" />
      <circle cx={51} cy={33} r="2.9" fill="#b78300" />
      <path d="m53.8 32.5c0 1.6-1.3 2.9-2.9 2.9-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9" fill="#ffd664" />
    </svg>
  );
}
