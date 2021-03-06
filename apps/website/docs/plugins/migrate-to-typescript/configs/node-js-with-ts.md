---
id: node-js-with-ts
# pagination_prev: plugins/migrate-to-typescript/configs/index
# pagination_next: null
sidebar_position: 2
---

# node-js-with-ts

✅ included in config | 🟡 warn level | 🔴 error level | 🔧 fixable | 💡 suggestion

| name                                                                       | ✅  | 🟡  | 🔴  | 🔧  | 💡  |
| -------------------------------------------------------------------------- | --- | --- | --- | --- | --- |
| **[no-commonjs-dynamic-require](../rules/no-commonjs-dynamic-require.md)** | ✅  | 🟡  |     |     |     |
| **[no-commonjs-exports](../rules/no-commonjs-exports.md)**                 | ✅  | 🟡  |     | 🔧  |     |
| **[no-commonjs-module-exports](../rules/no-commonjs-module-exports.md)**   | ✅  | 🟡  |     | 🔧  |     |
| **[no-esm-dynamic-import](../rules/no-esm-dynamic-import.md)**             | ✅  | 🟡  |     |     |     |
| **[no-esm-export-default](../rules/no-esm-export-default.md)**             | ✅  | 🟡  |     |     |     |
| **[no-require](../rules/no-require.md)**                                   | ✅  | 🟡  |     |     |     |
| **[esm-consistent-type-import](../rules/esm-consistent-type-import.md)**   | ✅  |     | 🔴  | 🔧  |     |

usage:

```json
  // .eslintrc.json
  {
    ...,
    "plugins": ["migrate-to-typescript"],
    "extends": ["plugin:migrate-to-typescript/node-js-with-ts"],
    ...
  }
```
