module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['plugin:react/recommended', 'standard', "react-app"],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    semi: [2, 'always'],
    'object-curly-newline': 'off',
    'comma-dangle': 'off',
    "no-anonymous-exports-page-templates": "warn",
    "limited-exports-page-templates": "warn",
    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': ['error', { arrowParens: 'avoid', singleQuote: true, semi: true, printWidth: 120 }],
  },
};
