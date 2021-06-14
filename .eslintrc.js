const path = require('path');

module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app', 'airbnb', 'eslint:recommended', "plugin:react/recommended"],
  parser: "babel-eslint", // uses babel-eslint transforms
  settings: {
    react: {
      version: 'detect' // detect react version
    }
  },
  env: {
    node: true // defines things like process.env when generating through node
  },
  rules: {
    'react/jsx-filename-extension': [0],
    'react/require-default-props': [0],
    'import/prefer-default-export': [0],
    'react/jsx-props-no-spreading': [0],
    'react/no-array-index-key': [0],
    'react/no-danger': [0],
    "import/no-extraneous-dependencies": [0]
  }
}
