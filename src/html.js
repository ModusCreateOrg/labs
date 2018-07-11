import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render() {
    return (
      <html prefix="og: https://ogp.me/ns#" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // load fonts
                WebFontConfig = {
                  google: {
                    families: ['Montserrat:300,400,600', 'Roboto', 'Roboto+Condensed']
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
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
