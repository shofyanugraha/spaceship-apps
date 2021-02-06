module.exports = {
  root: true,

  env: {
    node: true
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // note you must disable the base rule as it can report incorrect errors
    camelcase: "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "angle-bracket" }],
    "@typescript-eslint/ban-ts-ignore)": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-ignore": "off"
    // '@typescript-eslint/no-empty-function': 'off'
  },

  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser"
  },

  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        jest: true
      }
    }
  ],

  extends: [
    "plugin:vue/essential",
    // 'eslint:recommended',
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ]
};
