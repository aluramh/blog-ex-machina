import React from "react";

const themeLoadScript: string = `
// Get the value from localStorage and parse it, since it was stored stringified
const localStorageTheme = JSON.parse(localStorage.theme)
// On page load or when changing themes, best to add inline in \`head\` to avoid 
if (localStorageTheme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.querySelector('html').className = 'dark'
} else {
  document.querySelector('html').className = 'light'
}
`;

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: themeLoadScript }}
        />
        {props.headComponents}
      </head>

      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
