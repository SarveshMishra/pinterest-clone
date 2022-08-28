module.exports = {
	env: {
		browser: true,
		es2021: true,
		node:true
	},
	extends: ['plugin:react/recommended', 'eslint:recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
	},
};
