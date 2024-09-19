# ctrlo-helper-plugins
This repository contains Webpack plugins for use with [gads](https://github.com/ctrlo/gads) common tasks.

The plugins available are:

- `ChmodPlugin` - A plugin to change apply `o+Rx` permissions to a directory recursively.
- `FengariPlugin` - A plugin to download the ctrlo version of the fengari scripts.
- `JestPlugin` - A plugin to run jest tests.

## Installation

To install the plugins, run the following command:

```bash
yarn add -D https://github.com/droberts-ctrlo/CtrlO-helper-plugins.git
```

## Usage

To use the plugins, add them to your `webpack.config.js` file:

```javascript
const { ChmodPlugin, FengariPlugin, JestPlugin } = require('ctrlo-helper-plugins');

module.exports = {
  plugins: [
    new ChmodPlugin(__dirname), // __dirname is the directory to apply the permissions to
    new FengariPlugin(__dirname + './public/js'), // __dirname is the base directory to download the fengari scripts to
    new JestPlugin('/jest.config.js') // '/jest.config.js' is the path to the jest configuration file
  ]
};
```
