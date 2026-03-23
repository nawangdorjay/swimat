import js from "@eslint/js";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "writable",
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/set-state-in-effect": "warn",
      "no-unused-vars": ["warn", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
      "no-undef": "off",
      "no-useless-escape": "warn",
      "no-prototype-builtins": "warn",
      "no-useless-assignment": "warn",
      "no-empty": "warn",
    },
  },
  {
    ignores: ["node_modules/**", ".next/**", "public/**"],
  },
];
