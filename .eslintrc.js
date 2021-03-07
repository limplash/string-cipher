module.exports = {
  extends: ['airbnb-base'],
  rules: {
    'comma-dangle': ['error', 'never'], 
    'import/prefer-default-export': 0, 
    'max-len': 0, 
    'import/extensions': 0
  },
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts']
        },
        'import/resolver': {
          typescript: {}
        }
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-function-return-type': 0, 
      }
    },
    {
      files: ['**/*.test.ts'],
      extends: ['plugin:jest/recommended'],
      env: {
        jest: true
      }
    }
  ]
};
