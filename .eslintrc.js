module.exports = {
    extends: [
        '@scandipwa',
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        requireConfigFile: false,
        babelOptions: {
            parserOpts: {
                plugins: ['jsx'],
            },
        },
    },
    rules: {
        '@typescript-eslint/object-curly-spacing': 'off',
        '@scandipwa/scandipwa-guidelines/only-render-in-component': 'off',
        '@scandipwa/scandipwa-guidelines/use-namespace': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'max-lines': 'off',
        'max-len': 'off',
    },
};
