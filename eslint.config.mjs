import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},
			// sourceType: "module",
		},
		rules: {
			"consistent-this": "off",
			curly: "error",
			camelcase: ["error"],
			"line-comment-position": "off",
			"max-lines": "off",
			"no-magic-numbers": "off",
			"no-inline-comments": "off",
			"one-var": "off",
			"sort-keys": "off",
		},
	},
	{
		...pluginJs.configs.recommended,
		plugins: {
			'@stylistic/js': stylisticJs,
		},
		rules: {
			"@stylistic/js/indent": ["error", "tab"],
			"@stylistic/js/padded-blocks": "off",
			"@stylistic/js/quote-props": ["error", "as-needed"]
		},
		files: ['**/*.js', '**/*.mjs'],
	},
	{
		files: ["**/*.json"],
		plugins: {
			json
		},
		language: "json/jsonc"
	},
	{
		files: ["**/*.md"],
		plugins: {
			markdown
		},
		language: "markdown/commonmark",
		rules: {
			"markdown/no-html": "error"
		}
	}
];
