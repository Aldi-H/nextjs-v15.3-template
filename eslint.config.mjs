import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      "no-console": "error",
      "no-unused-vars": "error",
      "no-var": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "no-alert": "error",
      "consistent-return": "error",
      "no-nested-ternary": "off",
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
        },
      ],
      "unicorn/import-style": "off"
    },
  }),
  eslintPluginUnicorn.configs.recommended,
];

export default eslintConfig;
