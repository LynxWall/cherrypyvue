# CherryPy with Vue (cherrypyvue)

This project provides a starter template for building a CherryPy application that uses Vue for the user interface.

It includes the following:

- Small Vue application (skills)
- Dev and Prod Webpack configurations
- Linting support

## Building and running on localhost

First install dependencies:

```sh
yarn setup
```

To create a production build:

```sh
yarn buildProd
```

To create a development build:

```sh
yarn buildDev
```

To run CherryPy with Vue in Development Mode (webpack --watch):

```sh
yarn startDev
```

To run Vue only in the webpack-dev-server (hot reload):

```sh
yarn startVue
```

To run CherryPy with Vue in Production Mode (webpack):

```sh
yarn startProd
```

## Running

To run static content with Node:
(one of the builds need to be executed first)

```sh
node ./bin/NodeServer.js
```

## Runnint Lint

```sh
yarn lint

# executes the following three lint commands
- yarn eslint
- yarn pythonlint
- yarn sasslint
```
