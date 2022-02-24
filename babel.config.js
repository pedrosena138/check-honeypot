module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@useCases": "./src/useCases",
          "@entities": "./src/entities",
          "@services": "./src/services",
          "@repositories": "./src/repositories",
          "@config": "./src/config",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
