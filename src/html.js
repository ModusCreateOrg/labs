import React from 'react';
import PropTypes from 'prop-types';

const HTML = ({
  htmlAttributes,
  headComponents,
  preBodyComponents,
  body,
  postBodyComponents,
  bodyAttributes,
}) => (
  <html prefix="og: https://ogp.me/ns#" lang="en" {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      {headComponents}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // load fonts
            WebFontConfig = {
              google: {
                families: ['Khula:300,800', 'Lato']
              },
            };
            (function(d) {
                var wf = d.createElement('script'), s = d.scripts[0];
                wf.src = 'https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.28/webfontloader.js';
                wf.async = true;
                s.parentNode.insertBefore(wf, s);
            })(document);
          `,
        }}
      />
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
);

HTML.propTypes = {
  htmlAttributes: PropTypes.shape({}),
  headComponents: PropTypes.any,
  bodyAttributes: PropTypes.shape({}),
  preBodyComponents: PropTypes.arrayOf(PropTypes.object),
  body: PropTypes.string,
  postBodyComponents: PropTypes.arrayOf(PropTypes.object),
};

export default HTML;
