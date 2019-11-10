import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { renderRoutes } from 'react-router-config';
// import serialize from 'serialize-javascript';
// import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';

// req, store come here from index.js from res.send(renderer(req, store));
export default (req, store, context) => {
  const content = ReactDOMServer.renderToString(
    // context is required for errors handling and redirects
    // path is for looking to diff routes and decide what to show on screen
    <Provider store={store}>
      <StaticRouter location={ req.url } context={ {} }>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
