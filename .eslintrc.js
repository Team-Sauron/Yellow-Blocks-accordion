module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    rules: {
        'no-console': 'off',
        "react/prop-types": 0,
        "no-underscore-dangle": 'off',
        "max-len": 'off',
        "jsx-a11y/accessible-emoji": 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        "react/no-array-index-key": 'off',
        "prefer-destructuring": ["error", {
          "VariableDeclarator": {
            "array": false,
            "object": true
          },
          "AssignmentExpression": {
            "array": true,
            "object": false
          }
        }, {
          "enforceForRenamedProperties": false
        }]
      },
      env: {
        "browser": true,
      }
};
