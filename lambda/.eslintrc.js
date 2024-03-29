module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true
        }
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        'require-jsdoc': ['off'],
        indent: ['error, 4'],
        camelcase: 'off'
    }
}