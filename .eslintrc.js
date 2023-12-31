module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'xo',
        'prettier',
        'plugin:i18next/recommended'
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', '@stylistic/ts', 'i18next'],
    rules: {
        'linebreak-style': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { argsIgnorePattern: '^_' },
        ],
        '@stylistic/no-tabs': 'off',
        'react/react-in-jsx-scope': 'off',
        "i18next/no-literal-string": 2,
    },
    globals: {
        __IS_DEV__: true,
    },
}
