module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true
        }
    },
    env: {
        browser: true
    },
    plugins: ['vue'],
    extends: ['standard', 'plugin:vue/essential'],
    rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        indent: ['error', 4],
        semi: [2, 'always'],
        'no-tabs': 0,
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'vue/html-indent': ['error', 4]
    }
};
