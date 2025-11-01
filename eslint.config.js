// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
        // Exige espacio dentro de llaves en objetos y exportaciones
        "object-curly-spacing": ["error", "always"],
        // Exige saltos de línea consistentes en exportaciones de objetos
        "object-curly-newline": ["error", { "multiline": true, "consistent": true }],
      // Exige punto y coma al final de cada declaración
      "semi": ["error", "always"],
    // Exige salto de línea después de la llave de apertura y antes de la de cierre
    "brace-style": ["error", "1tbs", { "allowSingleLine": false }],
    // Exige salto de línea por cada llamada encadenada (mejora legibilidad)
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
      rules: {
        // Exige espacio dentro de llaves en expresiones Angular
        'angular-eslint/template-curly-spacing': ['error', 'always'],
      },
  }
);
