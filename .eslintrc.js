module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['import', 'react', 'prettier', 'jsx-a11y'],
  rules: {
    'no-unused-vars': [2, { varsIgnorePattern: 'React|jsx|h' }],
    'react/jsx-uses-vars': 2,
    'no-undef': 0,
    'import/no-absolute-path': 0
  }
}
