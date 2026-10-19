import path from 'node:path';
import js from '@eslint/js';
import importX from 'eslint-plugin-import-x';
import svelte from 'eslint-plugin-svelte';
import { defineConfig, includeIgnoreFile } from 'eslint/config';
import createTypeScriptImportResolver from 'eslint-import-resolver-typescript';
import globals from 'globals';
import ts from 'typescript-eslint';

const gitignorePath = path.resolve(import.meta.dirname, '.gitignore');

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	ts.configs.recommended,
	svelte.configs.recommended,
	importX.flatConfigs.recommended,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		rules: {
			// typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
			// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			"no-undef": 'off',
			'import-x/order': [
				'error',
				{
					'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				}
			]
		}
	},
	{
  		settings: {
    		'import-x/resolver-next': [
      			createTypeScriptImportResolver(),  // reads tsconfig.json paths → resolves $lib
    		],
  		},
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser
			}
		}
	},
	{
		// Override or add rule settings here, such as:
		// 'svelte/button-has-type': 'error'
		rules: {
    		'import-x/no-unresolved': ['error', {
      			ignore: ['\\.pdf$', '\\.(png|jpg|jpeg|svg|woff2?|ttf|mp3|wav|mp4)$'],
    		}],			
		}
	}
);
