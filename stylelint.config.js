module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended', 'stylelint-config-styled-components'],
  rules: {
    'prettier/prettier': true,
    'selector-type-no-unknown': null,
  },
};