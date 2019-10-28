const { write } = require('./writer');

module.exports = function srcIndexWriter(path) {

  const str = `<!DOCTYPE html>
<html lang="en">
  
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>starter-code</title>
</head>
  
<body>
  <div id="root"></div>
</body>
  
</html>
  `;

  const str2 = `import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
  
render(
  <App />,
  document.getElementById('root')
);

`;

  write(str2, `${path}/src/index.js`);
  write(str, `${path}/src/index.html`);
};
