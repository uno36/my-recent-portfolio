module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "airbnb",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "build"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: { react: { version: "18.2" } },
  plugins: ["react", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": "off",
    "no-shadow": "off",    
    "no-param-reassign": ["error", { props: false }],
  },
};
