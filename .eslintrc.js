module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: [2, 'always'],
    'object-curly-newline': 'off',
    'comma-dangle': 'off',
    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': ['error', { arrowParens: 'avoid', singleQuote: true, semi: true, printWidth: 120 }],
  },
};
