module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'jest --coverage --findRelatedTests',
    'yarn lint --fix',
  ],
}
