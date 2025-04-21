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
    plugins: [eslintPluginUnicorn],
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: [
      {
        "no-console": "error",
        "no-unused-var": "error",
        "no-var": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "no-alert": "error",
        "consistent-return": "error",
        "no-nested-ternary": "off",
      },
      eslintPluginUnicorn.configs.recommended,
      {
        rules: {
          "unicorn/filename-case": [
            "error",
            {
              case: "kebabCase",
              // ignore: [
              // 	"package.json",
              // 	"package-lock.json",
              // 	"README.md",
              // 	"LICENSE",
              // 	"CHANGELOG.md",
              // ],
            },
          ],
        },
      },
    ],
  }),
];

export default eslintConfig;
