module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['jest'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'react/prop-types': ['error', { skipUndeclared: true }],
    'react/forbid-prop-types': [0],
    'react/require-default-props': [0],
    'import/prefer-default-export': [0],
    'react/jsx-props-no-spreading': [0],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', 'src/stories/**', '**/*.stories.js'],
      },
    ],
  },
};
