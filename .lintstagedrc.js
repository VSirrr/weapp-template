module.exports = {
  '*.{md,json}': ['prettier --write'],
  '*.js': ['eslint --fix', 'prettier --write'],
}
