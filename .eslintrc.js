module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
        "react-native"
    ],
    "rules": {
        "react/jsx-filename-extension": [
            1,
            {
              extensions: [".js", ".jsx"]
            }
          ],
          "prettier/prettier": [
            "error",
            {
              trailingComma: "es5",
              singleQuote: true,
              printWidth: 100
            }
          ]
    }
};