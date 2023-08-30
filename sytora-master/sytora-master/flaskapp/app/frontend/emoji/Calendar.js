import React from 'react';

export default function Calendar(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <g fill="#819096">
        <path d="m2 34.2h3.6v5.9h-3.6z" />
        <path d="m58.3 18.4h3.6v5.9h-3.6z" />
        <path d="m59.7 21.7l-32.4-11.3c-1.4-.5-3.2-.1-4 .9l-8.9 11.6-11.7 15.3c-1.2 1.5-.8 3.4.9 4.2l39.3 17.3c2 .9 4.3 0 5.1-1.9l7.8-18.8 5.9-14c.5-1.2-.4-2.7-2-3.3" />
      </g>
      <path d="m61.7 19.1c.5-1.2-.4-2.7-2-3.3l-32.4-11.3c-1.4-.5-3.2-.1-4 .9l-8.9 11.6 41.4 16.1 5.9-14" fill="#ed4c5c" />
      <path d="m14.4 17l-11.7 15.3c-1.2 1.5-.8 3.4.9 4.2l39.3 17.3c2 .9 4.3 0 5.1-1.9l7.9-18.8-41.5-16.1" fill="#cad5dd" />
      <path d="m4.2 30.3c-1.2 1.5.3 3.8 1.5 4.9 4.7 4.3 23 12.3 23 12.3l-24.5-17.2" opacity=".5" fill="#333" />
      <path d="m14.4 17c0 0-3.8 5.3-7 6.8-2.4 1.1-3.8 0-4.4 1.8-3 10.6 39.6 28.4 39.6 28.4 2 .9 4.3 0 5.1-1.9l8.1-19.1-41.4-16" fill="#d9e3e8" />
      <path d="m61.8 18.2c.3-1 .5-1.8-1.8-2.5l-32.7-11.2c-2.1-.8-2.8-.6-4 .9l-2.7 3.2 39.6 14.1 1.6-4.5" fill="#c7d3d8" />
      <path fill="#93a2aa" d="m60.2 22.7v5.9l1.6-4 .2-7.3z" />
      <g fill="#69787c">
        <ellipse cx="33.5" cy="9.8" rx="1.6" ry="1.3" />
        <ellipse cx="48.3" cy="15.1" rx="1.6" ry="1.3" />
      </g>
      <path d="m35 9.5l12.4 4.5c0 0 .5.3.2 2.4-.5-.1-.9-.8-.9-.8l-12.5-4.6c.1-.1-.1-.4.8-1.5" fill="#e8edef" />
      <path d="m34.7 9.9l12.4 4.5c0 0 .3.4.3 1.8-.4-.3-.6-.7-.6-.7l-12.5-4.6c0 0-.2-.2.4-1" fill="#93a2aa" />
      <path fill="#69787c" d="m20.6 8.9v-.3l39.6 14.1v6.2h-.2l.1-5.9z" />
      <g fill="#fff">
        <path d="m28.3 17.9l-.1.1c-.3.5-.4.9-.4 1.1 0 .2.1.4.5.6.3.1.6.1.8-.1.1-.1.3-.3.5-.7l2.6-4.7 1.5.5-2.7 4.9c-.3.6-.7 1-1.1 1.2-.7.4-1.4.5-2.3.1-.9-.3-1.3-.8-1.3-1.4 0-.6.1-1.2.6-2l.1-.2 1.3.6" />
        <path d="m35.2 15.4l1.6.6-2.4 4.2c-.3.5-.4.8-.4 1.1 0 .5.3.8.9 1.1.6.2 1.1.2 1.6-.1.2-.2.5-.5.8-1l2.4-4.3 1.7.6-2.5 4.4c-.4.7-.9 1.3-1.4 1.6-.9.6-2 .6-3.3.1-1.3-.5-1.9-1.2-1.9-2.1 0-.5.2-1.1.6-1.8l2.3-4.4" />
        <path d="m42.9 18.1l1.7.6-3.3 5.9 4.1 1.6-.8 1.3-5.7-2.3 4-7.1" />
      </g>
      <g fill="#333">
        <path d="m19 27.7l1.1-1.9c1 .3 1.7.5 2.1.6.7.1 1.3.1 1.9-.2.4-.1.8-.4 1.2-.8.2-.2.4-.4.5-.5l2.5 1-8.3 14.3-3.1-1.2 5.8-9.8-3.7-1.5" />
        <path d="m42.3 34.5c-.7.2-1.8.7-3.2 1.4-1.4.7-2.7 1.5-4 2.5-1 .7-2 1.6-3.1 2.8-1.1 1.1-1.9 2.1-2.4 2.9l-3.1-1.3c1.6-2.5 4-4.8 7.4-6.8 2.1-1.3 3.7-2.1 4.9-2.4l-7.7-3.1 1.5-2.5 10.9 4.3-1.2 2.2" />
      </g>
    </svg>
  );
}
