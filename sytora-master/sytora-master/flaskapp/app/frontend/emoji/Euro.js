import React from 'react';

export default function Euro(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path fill="#428bc1" d="m0 46.5h64v9h-64z" />
      <path fill="#42ade2" d="m0 8.5h64v38h-64z" />
      <path fill="#94989b" d="m24 46.5h16v9h-16z" />
      <path fill="#428bc1" d="m4 12.5h56v30h-56z" />
      <path fill="#42ade2" d="m7 15.5h50v24h-50z" />
      <circle cx={45} cy="27.5" r={8} fill="#428bc1" />
      <path fill="#d0d0d0" d="m24 8.5h16v38h-16z" />
      <path d="m19.3 33.5c-2.2 0-4.2-1.2-5.2-3h6.7v-2h-7.4c-.1-.3-.1-.7-.1-1s0-.7.1-1h7.4v-2h-6.7c1.1-1.8 3-3 5.2-3 .4 0 .8 0 1.2.1l.5-2c-.5-.1-1.1-.2-1.7-.2-3.4 0-6.4 2.1-7.6 5h-2.7v2h2.2c0 .3-.1.7-.1 1s0 .7.1 1h-2.2v2h2.7c1.2 2.9 4.2 5 7.6 5 .6 0 1.1-.1 1.7-.2l-.5-2c-.3.3-.8.3-1.2.3" fill="#fff" />
    </svg>
  );
}
