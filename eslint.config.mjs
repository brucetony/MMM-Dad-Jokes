import {FlatCompat} from "@eslint/eslintrc";
import {fileURLToPath} from "node:url";
import globals from "globals";
import json from "@eslint/json";
import path from "node:path";
import pluginJs from "@eslint/js";

const filename = fileURLToPath(import.meta.url);
const dirName = path.dirname(filename);
const compat = new FlatCompat({
    baseDirectory: dirName,
    recommendedConfig: pluginJs.configs.recommended,
    allConfig: pluginJs.configs.all
});

export default [
    {
        ...pluginJs.configs.recommended,
        files: ['**/*.js', '**/*.mjs'],
    },
    ...compat.extends("eslint:all"), {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            ecmaVersion: "latest",
            sourceType: "module",
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
        files: ["**/*.json"],
        plugins: {
            json
        },
        language: "json/jsonc"
    }
];
