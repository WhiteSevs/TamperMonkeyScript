import js from "@eslint/js";
import ts from "typescript-eslint";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import compat from "eslint-plugin-compat";
import globals from "globals";

export default defineConfig(
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        project: "./tsconfig.json",
      },
      sourceType: "module",
    },
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: {
      compat: compat,
      prettier: prettierPlugin,
    },
    files: ["src/**"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-this-alias": "off",
      "compat/compat": "error",
      "prettier/prettier": "error",
    },
  },
  prettier,
  { ignores: ["dist/", "node_modules/", "rollup.config.js", "demo/"] }
);
