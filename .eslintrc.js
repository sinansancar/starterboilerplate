module.exports = {
  root: true,
  extends: ['standard', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  globals: {
    'IS_DEVELOPMENT': 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2024,
  },
}
