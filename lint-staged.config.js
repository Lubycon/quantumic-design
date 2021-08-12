module.exports = {
  '*.{ts,tsx}': [() => 'yarn pnpify tsc -p tsconfig.json --noEmit', 'eslint', 'prettier --write'],
};
