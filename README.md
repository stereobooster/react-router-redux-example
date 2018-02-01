# Issue

Reproducible demo for https://github.com/ReactTraining/react-router/issues/5428

```
Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
▶ 26 stack frames were collapsed.
./src/index.js
src/index.js:44
  41 |   throw new Error("There is no root");
  42 | }
  43 |
> 44 | ReactDOM.render(
  45 |   <Provider store={store}>
  46 |     {/* ConnectedRouter will use the store from Provider automatically */}
  47 |     <ConnectedRouter history={history}>
View compiled
▶ 6 stack frames were collapsed.
This screen is visible only in development. It will not appear if the app crashes in production.
Open your browser’s developer console to further inspect this error.
```
