module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eqeqeq':'off',
    'no-multi-spaces':'off',
    'no-undef':'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
