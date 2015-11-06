System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "declaration": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "module": "commonjs"
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "src": {
      "defaultExtension": "ts",
      "main": "boot",
      "map": {
        "exampleComponent": "src/component/exampleComponent",
        "exampleDirective": "src/directive/exampleDirective",
        "examplePipe": "src/shared/examplePipe"
      }
    }
  }
});
